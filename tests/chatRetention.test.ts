import { describe, expect, it } from "vitest";

import {
  DEFAULT_GUEST_RETENTION_DAYS,
  getRetentionCutoff,
  parseRetentionDays,
} from "@/lib/chatRetention";

describe("parseRetentionDays", () => {
  it("defaults when unset", () => {
    expect(parseRetentionDays(undefined)).toBe(DEFAULT_GUEST_RETENTION_DAYS);
    expect(parseRetentionDays("")).toBe(DEFAULT_GUEST_RETENTION_DAYS);
  });

  it("parses explicit values", () => {
    expect(parseRetentionDays("30")).toBe(30);
  });

  it("treats 0 as disabled (kept, not defaulted)", () => {
    expect(parseRetentionDays("0")).toBe(0);
  });

  it("defaults on negative or garbage values", () => {
    expect(parseRetentionDays("-5")).toBe(DEFAULT_GUEST_RETENTION_DAYS);
    expect(parseRetentionDays("forever")).toBe(DEFAULT_GUEST_RETENTION_DAYS);
  });
});

describe("getRetentionCutoff", () => {
  it("subtracts whole days from now", () => {
    const now = new Date("2026-07-12T09:00:00.000Z");
    expect(getRetentionCutoff(90, now).toISOString()).toBe(
      "2026-04-13T09:00:00.000Z",
    );
  });
});
