import * as Sentry from "@sentry/nextjs";

// Client-side error monitoring. No-op without a DSN, and disabled outside
// production so local dev-server noise (stale Turbopack chunks, HMR
// artifacts) never emails the team.
if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    environment: process.env.NODE_ENV,
    enabled: process.env.NODE_ENV === "production",
    tracesSampleRate: 0.1,
  });
}
