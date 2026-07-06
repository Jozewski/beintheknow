/**
 * Shared authorization check for /api/cron/* routes.
 *
 * Production rule: the request MUST carry `Authorization: Bearer ${CRON_SECRET}`.
 * Vercel Cron sends this header automatically when the CRON_SECRET environment
 * variable is set on the project, so scheduled runs keep working.
 *
 * We intentionally do NOT trust `user-agent` or `x-vercel-cron-schedule`:
 * both are client-controlled and spoofable, which would let anyone trigger
 * LegiScan syncs and embedding runs (external API quota + spend).
 *
 * Outside production the check is skipped for local development convenience.
 */
export function isAuthorizedCronRequest(request: Request): boolean {
  const cronSecret = process.env.CRON_SECRET;
  const authorization = request.headers.get("authorization");

  if (cronSecret && authorization === `Bearer ${cronSecret}`) {
    return true;
  }

  return process.env.NODE_ENV !== "production";
}
