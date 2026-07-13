import * as Sentry from "@sentry/nextjs";

// No-op when the DSN is not configured (e.g., local dev without Sentry).
// Disabled outside production so local dev sessions never report.
if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    environment: process.env.NODE_ENV,
    enabled: process.env.NODE_ENV === "production",
    // Keep performance tracing light; errors are the priority.
    tracesSampleRate: 0.1,
  });
}
