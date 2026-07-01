import { NextFunction, Request, Response } from "express";
import { ApiError } from "@/utils/ApiError";
import { verifyAccessToken } from "@/utils/jwt";

// Protects a route: requires a valid access token in the Authorization
// header. This is intentionally SYNCHRONOUS (jwt.verify is sync), so a
// thrown error is automatically caught by Express 4 without needing
// asyncHandler here.
export function authenticate(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization; // expected format: "Bearer <token>"

  if (!authHeader?.startsWith("Bearer ")) {
    throw ApiError.unauthorized("Authentication required");
  }

  const token = authHeader.split(" ")[1];

  try {
    req.user = verifyAccessToken(token);
  } catch {
    // Covers both an invalid signature AND an expired token — the client
    // should react to any 401 here by calling POST /api/auth/refresh.
    throw ApiError.unauthorized("Invalid or expired token");
  }

  next();
}

// Role-based authorization — used AFTER `authenticate` on routes that
// require a specific role, e.g. `router.delete('/x', authenticate,
// authorize('ADMIN'), controller.delete)`. Kept separate from
// `authenticate` because "who are you" and "are you allowed to do this"
// are different concerns — some routes need the former without the latter.
export function authorize(...allowedRoles: Array<"CUSTOMER" | "ADMIN">) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) throw ApiError.unauthorized("Authentication required");

    if (!allowedRoles.includes(req.user.role)) {
      throw ApiError.forbidden("You do not have permission to perform this action");
    }

    next();
  };
}
