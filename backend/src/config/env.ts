import "dotenv/config";
import { z } from "zod";

// Every environment variable the app needs, with types and validation.
// If any are missing/invalid, the process crashes immediately on boot —
// not three requests later when someone finally hits the broken code path.
const envSchema = z.object({
  PORT: z.coerce.number().default(4000),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  CLIENT_URL: z.string().url(),

  DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),

  JWT_ACCESS_SECRET: z.string().min(20, "JWT_ACCESS_SECRET must be at least 20 characters"),
  JWT_REFRESH_SECRET: z.string().min(20, "JWT_REFRESH_SECRET must be at least 20 characters"),
  JWT_ACCESS_EXPIRES_IN: z.string().default("15m"),
  JWT_REFRESH_EXPIRES_IN: z.string().default("7d"),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("❌ Invalid environment variables:");
  console.error(parsed.error.flatten().fieldErrors);
  process.exit(1);
}

export const env = parsed.data;
