/**
 * Guest chat retention policy.
 *
 * Guest conversations are not tied to an account, so nobody can delete them
 * self-service the way account holders can. Left alone they would accumulate
 * forever - and stored chat history from a vulnerable population is exactly
 * the data a breach or subpoena would expose. The retention purge deletes
 * guest sessions (and their messages) that have been inactive longer than
 * GUEST_RETENTION_DAYS (default 90; 0 disables the purge).
 *
 * Account-owned sessions are NEVER touched: signed-in users were promised
 * saved history plus self-service deletion, and this keeps that promise
 * truthful.
 *
 * The date math is a pure function so the cutoff rules are unit-testable.
 */

export const DEFAULT_GUEST_RETENTION_DAYS = 90;

/** Parses GUEST_RETENTION_DAYS. 0 (or negative/garbage-free zero) disables. */
export function parseRetentionDays(raw: string | undefined): number {
  if (raw === undefined || raw.trim() === "") {
    return DEFAULT_GUEST_RETENTION_DAYS;
  }
  const parsed = Number(raw);
  if (!Number.isFinite(parsed) || parsed < 0) {
    return DEFAULT_GUEST_RETENTION_DAYS;
  }
  return Math.floor(parsed);
}

export function getRetentionCutoff(days: number, now: Date = new Date()): Date {
  return new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
}
