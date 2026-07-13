import { describe, expect, it } from "vitest";

import { parseDailyLimit } from "@/lib/quota";

describe("parseDailyLimit", () => {
  it("parses a valid limit", () => {
    expect(parseDailyLimit("10", 5)).toBe(10);
  });

  it("floors fractional values", () => {
    expect(parseDailyLimit("7.9", 5)).toBe(7);
  });

  it("falls back when unset", () => {
    expect(parseDailyLimit(undefined, 5)).toBe(5);
  });

  it("falls back on zero - quotas are the only spend control", () => {
    expect(parseDailyLimit("0", 5)).toBe(5);
  });

  it("falls back on negative values", () => {
    expect(parseDailyLimit("-3", 25)).toBe(25);
  });

  it("falls back on garbage", () => {
    expect(parseDailyLimit("unlimited", 25)).toBe(25);
  });
});
