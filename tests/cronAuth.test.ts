import { describe, expect, it, vi } from "vitest";

import { isAuthorizedCronRequest } from "@/lib/cronAuth";

function requestWith(headers: Record<string, string> = {}) {
  return new Request("http://localhost/api/cron/pipeline", { headers });
}

describe("isAuthorizedCronRequest", () => {
  it("accepts the correct bearer secret", () => {
    vi.stubEnv("CRON_SECRET", "s3cret");
    expect(
      isAuthorizedCronRequest(requestWith({ authorization: "Bearer s3cret" })),
    ).toBe(true);
  });

  it("rejects a wrong secret in production", () => {
    vi.stubEnv("CRON_SECRET", "s3cret");
    vi.stubEnv("NODE_ENV", "production");
    expect(
      isAuthorizedCronRequest(requestWith({ authorization: "Bearer wrong" })),
    ).toBe(false);
  });

  it("rejects spoofed vercel-cron headers in production", () => {
    vi.stubEnv("CRON_SECRET", "s3cret");
    vi.stubEnv("NODE_ENV", "production");
    expect(
      isAuthorizedCronRequest(
        requestWith({
          "user-agent": "vercel-cron/1.0",
          "x-vercel-cron-schedule": "0 9 * * *",
        }),
      ),
    ).toBe(false);
  });

  it("rejects requests with no credentials in production", () => {
    vi.stubEnv("CRON_SECRET", "s3cret");
    vi.stubEnv("NODE_ENV", "production");
    expect(isAuthorizedCronRequest(requestWith())).toBe(false);
  });

  it("allows local development without a secret", () => {
    vi.stubEnv("NODE_ENV", "development");
    vi.stubEnv("CRON_SECRET", "");
    expect(isAuthorizedCronRequest(requestWith())).toBe(true);
  });
});
