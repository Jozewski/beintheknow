import { describe, expect, it } from "vitest";

import {
  RESET_TOKEN_TTL_MINUTES,
  generateResetToken,
  hashResetToken,
  isResetTokenFormat,
} from "@/lib/passwordReset";

describe("password reset tokens", () => {
  it("generates a 64-char hex token whose hash matches hashResetToken", () => {
    const { token, tokenHash } = generateResetToken();

    expect(isResetTokenFormat(token)).toBe(true);
    expect(tokenHash).toBe(hashResetToken(token));
    // The stored hash must never equal the emailed token.
    expect(tokenHash).not.toBe(token);
  });

  it("generates a unique token every time", () => {
    const first = generateResetToken();
    const second = generateResetToken();

    expect(first.token).not.toBe(second.token);
    expect(first.tokenHash).not.toBe(second.tokenHash);
  });

  it("sets expiry RESET_TOKEN_TTL_MINUTES in the future", () => {
    const before = Date.now();
    const { expiresAt } = generateResetToken();
    const after = Date.now();

    const ttlMs = RESET_TOKEN_TTL_MINUTES * 60 * 1000;
    expect(expiresAt.getTime()).toBeGreaterThanOrEqual(before + ttlMs);
    expect(expiresAt.getTime()).toBeLessThanOrEqual(after + ttlMs);
  });

  it("hashes deterministically", () => {
    expect(hashResetToken("a".repeat(64))).toBe(hashResetToken("a".repeat(64)));
    expect(hashResetToken("a".repeat(64))).not.toBe(hashResetToken("b".repeat(64)));
  });

  it("rejects malformed token formats", () => {
    expect(isResetTokenFormat("")).toBe(false);
    expect(isResetTokenFormat("short")).toBe(false);
    expect(isResetTokenFormat("A".repeat(64))).toBe(false); // uppercase
    expect(isResetTokenFormat("g".repeat(64))).toBe(false); // non-hex
    expect(isResetTokenFormat(`${"a".repeat(63)}!`)).toBe(false);
    expect(isResetTokenFormat("a".repeat(65))).toBe(false);
  });
});
