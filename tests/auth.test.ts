import { beforeEach, describe, expect, it, vi } from "vitest";

import {
  AUTH_COOKIE_NAME,
  buildAuthCookie,
  buildLogoutCookie,
  getAuthenticatedUser,
  hashPassword,
  signAuthToken,
  verifyPassword,
} from "@/lib/auth";

describe("auth", () => {
  beforeEach(() => {
    vi.stubEnv("JWT_SECRET", "test-secret-for-unit-tests");
  });

  it("hashes and verifies passwords", async () => {
    const hash = await hashPassword("correct horse battery");
    expect(hash).not.toContain("correct horse battery");
    expect(await verifyPassword("correct horse battery", hash)).toBe(true);
    expect(await verifyPassword("wrong password", hash)).toBe(false);
  });

  it("round-trips a signed token through the auth cookie", () => {
    const token = signAuthToken({ userId: "abc123", email: "jo@example.com" });
    const request = new Request("http://localhost/api/auth/me", {
      headers: { cookie: `${AUTH_COOKIE_NAME}=${token}` },
    });

    const user = getAuthenticatedUser(request);
    expect(user).not.toBeNull();
    expect(user?.userId).toBe("abc123");
    expect(user?.email).toBe("jo@example.com");
  });

  it("rejects a tampered token", () => {
    const token = signAuthToken({ userId: "abc123", email: "jo@example.com" });
    const request = new Request("http://localhost/api/auth/me", {
      headers: { cookie: `${AUTH_COOKIE_NAME}=${token}x` },
    });

    expect(getAuthenticatedUser(request)).toBeNull();
  });

  it("rejects a token signed with a different secret", () => {
    const token = signAuthToken({ userId: "abc123", email: "jo@example.com" });
    vi.stubEnv("JWT_SECRET", "a-completely-different-secret");
    const request = new Request("http://localhost/api/auth/me", {
      headers: { cookie: `${AUTH_COOKIE_NAME}=${token}` },
    });

    expect(getAuthenticatedUser(request)).toBeNull();
  });

  it("returns null without a cookie", () => {
    expect(
      getAuthenticatedUser(new Request("http://localhost/api/auth/me")),
    ).toBeNull();
  });

  it("builds an httpOnly session cookie and an expiring logout cookie", () => {
    const cookie = buildAuthCookie("token-value");
    expect(cookie).toContain(`${AUTH_COOKIE_NAME}=token-value`);
    expect(cookie).toContain("HttpOnly");
    expect(cookie).toContain("SameSite=Lax");

    const logout = buildLogoutCookie();
    expect(logout).toContain("Max-Age=0");
  });
});
