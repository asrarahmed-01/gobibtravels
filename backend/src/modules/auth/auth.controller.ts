import { Request, Response } from "express";
import { env } from "@/config/env";
import { ApiError } from "@/utils/ApiError";
import * as authService from "./auth.service";

// The CONTROLLER layer is intentionally "dumb" — it only translates between
// HTTP (req/res) and the service layer. No business rules live here; if you
// find yourself writing an `if` statement about business logic in a
// controller, it belongs in the service instead.

const REFRESH_COOKIE_NAME = "refreshToken";

// Centralizes the cookie options so login/register/refresh/logout all set
// and clear the cookie identically — drift between these would create
// hard-to-debug auth bugs (e.g. logout clearing a cookie with different
// options than the one that was set, which silently fails to clear it).
function refreshCookieOptions() {
  return {
    httpOnly: true, // JS on the page (and therefore XSS) can never read this cookie
    secure: env.NODE_ENV === "production", // HTTPS-only in production
    sameSite: "lax" as const, // sent on top-level navigation, blocks most CSRF vectors
    path: "/api/auth", // only sent to auth endpoints, not every API call
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days, mirrors JWT_REFRESH_EXPIRES_IN
  };
}

export async function register(req: Request, res: Response) {
  const { user, accessToken, refreshToken } = await authService.registerUser(req.body);
  res.cookie(REFRESH_COOKIE_NAME, refreshToken, refreshCookieOptions());
  res.status(201).json({ success: true, data: { user, accessToken } });
}

export async function login(req: Request, res: Response) {
  const { user, accessToken, refreshToken } = await authService.loginUser(req.body);
  res.cookie(REFRESH_COOKIE_NAME, refreshToken, refreshCookieOptions());
  res.status(200).json({ success: true, data: { user, accessToken } });
}

export async function refresh(req: Request, res: Response) {
  const incomingToken = req.cookies?.[REFRESH_COOKIE_NAME];
  if (!incomingToken) throw ApiError.unauthorized("No refresh token provided");

  const { user, accessToken, refreshToken } = await authService.refreshTokens(incomingToken);
  res.cookie(REFRESH_COOKIE_NAME, refreshToken, refreshCookieOptions());
  res.status(200).json({ success: true, data: { user, accessToken } });
}

export async function logout(req: Request, res: Response) {
  // req.user is attached by the `authenticate` middleware (see middleware/auth.ts)
  if (req.user) {
    await authService.logoutUser(req.user.sub);
  }
  res.clearCookie(REFRESH_COOKIE_NAME, { path: "/api/auth" });
  res.status(200).json({ success: true, data: null });
}

export async function me(req: Request, res: Response) {
  // Just echoes back the identity the `authenticate` middleware already
  // verified — proves the access token flow works end-to-end. Full profile
  // lookups (avatar, bookings, etc.) get added as those modules exist.
  res.status(200).json({ success: true, data: { user: req.user } });
}
