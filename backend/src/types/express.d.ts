import { JwtPayload } from "@/utils/jwt";

// Express's own `Request` type has no concept of `.user` — that's an
// application-specific addition, not a framework feature. TypeScript's
// "declaration merging" lets us extend a third-party library's types
// globally, so `req.user` is fully typed (and autocompletes!) in every
// controller, instead of every file doing `(req as any).user`.
declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

export {};
