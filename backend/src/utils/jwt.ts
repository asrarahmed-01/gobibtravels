import jwt from "jsonwebtoken";
import { env } from "@/config/env";

// The payload we embed inside every JWT. Deliberately minimal — a JWT is
// readable (base64-decoded, NOT encrypted) by anyone who has it, including
// the client, so it must never contain sensitive data (passwords, full
// profile info). We only embed what's needed to identify + authorize the
// user on each request.
export interface JwtPayload {
  sub: string; // "subject" — the user's id. `sub` is the JWT-standard claim name.
  role: "CUSTOMER" | "ADMIN";
}

export function signAccessToken(payload: JwtPayload): string {
  return jwt.sign(payload, env.JWT_ACCESS_SECRET, {
    expiresIn: env.JWT_ACCESS_EXPIRES_IN,
  });
}

export function signRefreshToken(payload: JwtPayload): string {
  return jwt.sign(payload, env.JWT_REFRESH_SECRET, {
    expiresIn: env.JWT_REFRESH_EXPIRES_IN,
  });
}

export function verifyAccessToken(token: string): JwtPayload {
  return jwt.verify(token, env.JWT_ACCESS_SECRET) as JwtPayload;
}

export function verifyRefreshToken(token: string): JwtPayload {
  return jwt.verify(token, env.JWT_REFRESH_SECRET) as JwtPayload;
}
