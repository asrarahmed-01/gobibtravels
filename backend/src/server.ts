import { app } from "./app";
import { env } from "@/config/env";
import { prisma } from "@/config/prisma";

const server = app.listen(env.PORT, () => {
  console.log(`🚀 gobib Travels API running on http://localhost:${env.PORT} [${env.NODE_ENV}]`);
});

// Graceful shutdown: on deploy platforms and container orchestrators, the
// process receives SIGTERM before being killed (e.g. during a redeploy or
// autoscaling event). Without handling it, in-flight requests get dropped
// mid-response and the Postgres connection pool closes uncleanly. This
// lets Express finish serving any in-flight requests, closes the DB pool
// cleanly, THEN exits.
async function shutdown(signal: string) {
  console.log(`\n${signal} received — shutting down gracefully...`);
  server.close(async () => {
    await prisma.$disconnect();
    console.log("✅ Server closed, DB connections released.");
    process.exit(0);
  });
}

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT")); // Ctrl+C in local dev
