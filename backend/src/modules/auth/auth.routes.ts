import { Router } from "express";
import rateLimit from "express-rate-limit";
import { validate } from "@/middleware/validate";
import { authenticate } from "@/middleware/auth";
import { asyncHandler } from "@/utils/asyncHandler";
import { registerSchema, loginSchema } from "./auth.schema";
import * as authController from "./auth.controller";

const router = Router();

// Login/register are brute-force targets — a dedicated, stricter rate
// limiter here (separate from the global one in app.ts) slows down
// credential-stuffing and password-guessing attacks specifically, without
// throttling normal browsing of the rest of the API.
const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 10, // 10 attempts per IP per window
  message: { success: false, message: "Too many attempts, please try again later" },
  standardHeaders: true,
  legacyHeaders: false,
});

// This file's ONLY job is wiring: URL + HTTP method + middleware chain +
// controller. No logic lives here — if you're tempted to add an `if` in a
// routes file, it belongs in the controller or service instead.
router.post("/register", authRateLimiter, validate(registerSchema), asyncHandler(authController.register));
router.post("/login", authRateLimiter, validate(loginSchema), asyncHandler(authController.login));
router.post("/refresh", asyncHandler(authController.refresh));
router.post("/logout", authenticate, asyncHandler(authController.logout));
router.get("/me", authenticate, asyncHandler(authController.me));

export default router;
