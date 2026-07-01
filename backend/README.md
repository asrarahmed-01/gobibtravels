# gobib Travels — Backend

Node.js + Express + TypeScript + PostgreSQL (Prisma) API.

## Phase 1: Authentication — done

Endpoints (all under `/api/auth`):
- `POST /register` — create account, returns access token + sets refresh cookie
- `POST /login` — same as above for existing users
- `POST /refresh` — rotates refresh token, issues new access token
- `POST /logout` — requires auth, invalidates the stored refresh token
- `GET /me` — requires auth, returns the identity from the access token

## Local setup

1. Install PostgreSQL locally, or spin up a free instance (Neon, Supabase, Railway all have free Postgres tiers).
2. `cp .env.example .env` and fill in `DATABASE_URL` + two random 32+ character strings for the JWT secrets.
3. `npm install`
4. `npm run prisma:migrate` — creates the `users` table from `prisma/schema.prisma`.
5. `npm run dev` — starts the API on `http://localhost:4000`.
6. Sanity check: `curl http://localhost:4000/health`

## Project structure (this pattern repeats every phase)

```
src/
  app.ts / server.ts        # Express app assembly / entry point
  config/                    # env validation, Prisma client singleton
  middleware/                 # auth, validation, error handling — reused by every module
  utils/                       # ApiError, asyncHandler, jwt, password helpers
  modules/
    auth/
      auth.schema.ts            # Zod request validation
      auth.service.ts           # business logic (no Express code)
      auth.controller.ts        # HTTP layer (req/res only)
      auth.routes.ts             # URL wiring
  types/express.d.ts          # adds req.user to Express's types
```

## Not yet done (flagged, not forgotten)
- Multi-device sessions (currently one active refresh token per user — see `schema.prisma` notes)
- Email verification / password reset flows
- Frontend login/register/profile pages don't exist yet in your Next.js app — need your go-ahead before I add any new UI
