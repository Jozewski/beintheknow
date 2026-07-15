import { createHash, randomBytes } from "node:crypto";

/**
 * Password reset token helpers. The raw token travels only inside the email
 * link; the database stores its SHA-256 hash, so a database leak never
 * exposes a usable reset link.
 */

export const RESET_TOKEN_TTL_MINUTES = 45;

// 32 random bytes as 64 lowercase hex characters.
const RESET_TOKEN_PATTERN = /^[0-9a-f]{64}$/;

export function hashResetToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

export function generateResetToken() {
  const token = randomBytes(32).toString("hex");
  return {
    token,
    tokenHash: hashResetToken(token),
    expiresAt: new Date(Date.now() + RESET_TOKEN_TTL_MINUTES * 60 * 1000),
  };
}

export function isResetTokenFormat(value: string) {
  return RESET_TOKEN_PATTERN.test(value);
}
