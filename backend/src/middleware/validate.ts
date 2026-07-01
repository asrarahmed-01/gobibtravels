import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

// A generic, reusable validation middleware — takes ANY Zod schema and
// validates req.body/query/params against it. Every module (auth,
// destinations, hotels, bookings...) reuses this exact middleware with its
// own schema, so validation logic is never duplicated per-route.
export const validate =
  (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    // Throws a ZodError on failure. We don't try/catch here — it's an
    // async-safe throw inside a sync function, so Express passes it
    // straight to errorHandler.ts, which already knows how to format
    // ZodErrors into a clean 400 response. One less thing this middleware
    // needs to know about.
    const parsed = schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    // Overwrite req.body with the PARSED (trimmed/lowercased/coerced)
    // version, so controllers always receive clean, validated data —
    // never the raw, unvalidated input.
    req.body = parsed.body;

    next();
  };
