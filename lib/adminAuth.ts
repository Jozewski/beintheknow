import { getAuthenticatedUser } from "@/lib/auth";

/**
 * Admin access check for /api/admin/* and the /admin dashboard.
 *
 * A request is admin when either:
 * - the signed-in account's email is listed in ADMIN_EMAILS
 *   (comma-separated, case-insensitive), or
 * - it presents `Authorization: Bearer ${CRON_SECRET}` (scripts/automation).
 */
export function isAdminRequest(request: Request): boolean {
  const cronSecret = process.env.CRON_SECRET;
  const authorization = request.headers.get("authorization");
  if (cronSecret && authorization === `Bearer ${cronSecret}`) {
    return true;
  }

  const user = getAuthenticatedUser(request);
  if (!user?.email) return false;

  const adminEmails = (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);

  return adminEmails.includes(user.email.toLowerCase());
}
