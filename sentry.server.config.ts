import * as Sentry from "@sentry/nextjs";

// No-op when the DSN is not configured (e.g., local dev without Sentry).
if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    environment: process.env.NODE_ENV,
    // Keep performance tracing light; errors are the priority.
    tracesSampleRate: 0.1,
  });
}
