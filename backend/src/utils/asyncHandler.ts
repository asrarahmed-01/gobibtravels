import { NextFunction, Request, Response } from "express";

type AsyncRouteHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<unknown>;

// Express 4 does NOT automatically catch rejected promises thrown inside
// async route handlers — an unhandled rejection in an `async (req, res) => {}`
// handler will crash the process instead of being passed to error middleware.
// This wrapper catches that rejection and forwards it to `next(err)`, so our
// central error handler can deal with it uniformly.
//
// (Express 5, still in adoption as of writing, fixes this natively — but
// pinning to Express 4 for now since it's the far more battle-tested,
// widely-deployed version; this wrapper is the standard workaround.)
export const asyncHandler =
  (fn: AsyncRouteHandler) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
