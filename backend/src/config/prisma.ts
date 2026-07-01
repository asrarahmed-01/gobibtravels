import { PrismaClient } from "@prisma/client";
import { env } from "./env";

// A single, shared Prisma Client instance for the entire app.
//
// Why a singleton: PrismaClient manages its own database connection pool.
// Creating a new PrismaClient() inside every controller/service would open
// a new pool per instance and quickly exhaust Postgres's max_connections
// under load. One instance, reused everywhere, is the standard pattern.
export const prisma = new PrismaClient({
  log: env.NODE_ENV === "development" ? ["query", "warn", "error"] : ["warn", "error"],
});
