import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import { env } from "@/config/env";
import { errorHandler } from "@/middleware/errorHandler";
import authRoutes from "@/modules/auth/auth.routes";

export const app = express();

// --- Security & parsing middleware ---
// Order matters: these run on EVERY request, top to bottom.

app.use(helmet()); // sets a battery of security-related HTTP headers (CSP, X-Frame-Options, etc.)

app.use(
  cors({
    origin: env.CLIENT_URL, // only your Next.js frontend's origin may call this API with credentials
    credentials: true, // required for the browser to send/receive the httpOnly refresh cookie
  })
);

app.use(express.json({ limit: "10kb" })); // parses JSON bodies; size-limited to blunt payload-based DoS attempts
app.use(cookieParser()); // populates req.cookies, needed to read the refresh token cookie

app.use(morgan(env.NODE_ENV === "development" ? "dev" : "combined")); // request logging

// A general, API-wide rate limit — generous, exists mainly to blunt
// obvious abuse/scraping. The auth routes layer their OWN stricter limiter
// on top of this for login/register specifically (see auth.routes.ts).
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 300,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

// --- Health check ---
// Deploy platforms (Render, Railway, Docker, k8s) ping this to know if the
// service is alive before routing traffic to it. Deliberately has NO
// dependencies (doesn't touch the DB) — it should answer even if Postgres
// is briefly unreachable, so the platform doesn't kill a recoverable pod.
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ success: true, status: "ok", timestamp: new Date().toISOString() });
});

// --- Routes ---
// Every module gets its own namespaced path. As Phase 2+ add modules
// (destinations, hotels, bookings...), they mount here the same way.
app.use("/api/auth", authRoutes);

// --- 404 handler ---
// Must come AFTER all real routes — anything that reaches here matched no
// registered route.
app.use((req: Request, res: Response) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` });
});

// --- Central error handler ---
// MUST be registered LAST. Express identifies it as error-handling
// middleware by its 4-argument signature (see errorHandler.ts).
app.use(errorHandler);
