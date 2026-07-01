import { prisma } from "@/config/prisma";
import { ApiError } from "@/utils/ApiError";
import { hashPassword, comparePassword } from "@/utils/password";
import { signAccessToken, signRefreshToken, verifyRefreshToken } from "@/utils/jwt";
import { RegisterInput, LoginInput } from "./auth.schema";

// The SERVICE layer contains business logic only — no `req`/`res`, no HTTP
// status codes, no knowledge that it's being called from an Express route
// at all. This separation (controller talks HTTP, service talks business
// rules) is what makes services trivially unit-testable: you can call
// `registerUser(...)` directly in a test with plain objects, no mock
// Express request needed, and reuse the same logic later from, say, an
// admin CLI script or a background job.

// What we return to the controller after auth — deliberately excludes
// passwordHash and refreshToken, which should NEVER leave this layer.
interface AuthResult {
  user: { id: string; name: string; email: string; role: string };
  accessToken: string;
  refreshToken: string;
}

export async function registerUser(input: RegisterInput): Promise<AuthResult> {
  const passwordHash = await hashPassword(input.password);

  // No manual "does this email already exist?" SELECT before the insert —
  // that check-then-insert pattern has a race condition (two requests could
  // both pass the check before either inserts). We let Postgres's UNIQUE
  // constraint on `email` be the source of truth; a violation throws a
  // Prisma P2002 error, which errorHandler.ts already translates into a
  // clean 409 Conflict response.
  const user = await prisma.user.create({
    data: { name: input.name, email: input.email, passwordHash },
  });

  return issueTokens(user.id, user.role, user.name, user.email);
}

export async function loginUser(input: LoginInput): Promise<AuthResult> {
  const user = await prisma.user.findUnique({ where: { email: input.email } });

  // Deliberately vague error message — "Invalid email or password" instead
  // of "No account with that email" / "Wrong password" separately. Being
  // specific here lets an attacker enumerate which emails have accounts
  // (a real, commonly-tested vulnerability class: user enumeration).
  if (!user) throw ApiError.unauthorized("Invalid email or password");

  const isPasswordValid = await comparePassword(input.password, user.passwordHash);
  if (!isPasswordValid) throw ApiError.unauthorized("Invalid email or password");

  return issueTokens(user.id, user.role, user.name, user.email);
}

export async function refreshTokens(incomingRefreshToken: string): Promise<AuthResult> {
  let payload;
  try {
    payload = verifyRefreshToken(incomingRefreshToken);
  } catch {
    throw ApiError.unauthorized("Invalid or expired refresh token");
  }

  const user = await prisma.user.findUnique({ where: { id: payload.sub } });
  if (!user || !user.refreshToken) throw ApiError.unauthorized("Session not found");

  // Compare against the HASHED token stored in the DB (see issueTokens) —
  // never store or compare raw refresh tokens, same principle as passwords.
  const isTokenValid = await comparePassword(incomingRefreshToken, user.refreshToken);
  if (!isTokenValid) throw ApiError.unauthorized("Session not found");

  // Rotate: issue a brand new refresh token and invalidate the old one.
  // This limits the damage window if a refresh token is ever stolen — a
  // stolen token can only be used ONCE before rotation invalidates it.
  return issueTokens(user.id, user.role, user.name, user.email);
}

export async function logoutUser(userId: string): Promise<void> {
  await prisma.user.update({
    where: { id: userId },
    data: { refreshToken: null },
  });
}

// Shared by register/login/refresh — signs both tokens and persists a
// HASHED copy of the refresh token so it can be validated (and revoked) later.
async function issueTokens(
  userId: string,
  role: string,
  name: string,
  email: string
): Promise<AuthResult> {
  const payload = { sub: userId, role: role as "CUSTOMER" | "ADMIN" };
  const accessToken = signAccessToken(payload);
  const refreshToken = signRefreshToken(payload);

  const hashedRefreshToken = await hashPassword(refreshToken);
  await prisma.user.update({
    where: { id: userId },
    data: { refreshToken: hashedRefreshToken },
  });

  return {
    user: { id: userId, name, email, role },
    accessToken,
    refreshToken,
  };
}
