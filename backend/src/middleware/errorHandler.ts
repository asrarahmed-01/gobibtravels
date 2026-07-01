import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { Prisma } from "@prisma/client";
import { ApiError } from "@/utils/ApiError";
import { env } from "@/config/env";

// Express recognizes this as error-handling middleware specifically because
// it declares FOUR parameters (err, req, res, next). This must be registered
// LAST, after all routes, in app.ts — Express calls it when any middleware
// calls next(err) or any asyncHandler-wrapped route throws.
export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) {
  // 1. Our own operational errors (ApiError.notFound, etc.)
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  // 2. Request validation failures from Zod (see middleware/validate.ts)
  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: err.flatten().fieldErrors,
    });
  }

  // 3. Known Prisma errors — translate opaque DB error codes into readable
  // API responses instead of leaking raw Postgres/Prisma internals.
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      // Unique constraint violation, e.g. duplicate email
      return res.status(409).json({
        success: false,
        message: `A record with this ${(err.meta?.target as string[])?.join(", ") ?? "value"} already exists`,
      });
    }
    if (err.code === "P2025") {
      return res.status(404).json({ success: false, message: "Record not found" });
    }
  }

  // 4. Anything else is an unexpected bug — log the full error server-side,
  // but never leak internals (stack traces, SQL, file paths) to the client.
  console.error("💥 Unexpected error:", err);

  return res.status(500).json({
    success: false,
    message: "Something went wrong",
    // Only include the real error/stack in development to help debugging.
    ...(env.NODE_ENV === "development" && {
      debug: err instanceof Error ? err.stack : err,
    }),
  });
}
