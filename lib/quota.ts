/**
 * Daily question quota limits.
 *
 * Extracted from the chat route so the parsing rules are unit-testable:
 * quotas are the project's only spend control, so a silently-misparsed env
 * var (negative, zero, or garbage value) must fall back to a safe default
 * rather than disabling the limit.
 */

export function parseDailyLimit(
  raw: string | undefined,
  fallback: number,
): number {
  const parsed = Number(raw ?? String(fallback));
  return Number.isFinite(parsed) && parsed > 0 ? Math.floor(parsed) : fallback;
}

export function getGuestDailyLimit() {
  return parseDailyLimit(process.env.GUEST_DAILY_LIMIT, 5);
}

export function getRegisteredDailyLimit() {
  return parseDailyLimit(process.env.REGISTERED_DAILY_LIMIT, 25);
}
