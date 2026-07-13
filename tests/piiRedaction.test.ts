import { describe, expect, it } from "vitest";

import { containsPii, redactPii } from "@/lib/piiRedaction";

describe("redactPii", () => {
  it("redacts SSNs with separators", () => {
    expect(redactPii("my ssn is 123-45-6789 thanks")).toBe(
      "my ssn is [SSN removed] thanks",
    );
    expect(redactPii("ssn 123 45 6789")).toBe("ssn [SSN removed]");
  });

  it("redacts bare 9-digit runs", () => {
    expect(redactPii("number is 123456789")).toBe("number is [SSN removed]");
  });

  it("redacts phone numbers in common formats", () => {
    expect(redactPii("call me at 602-555-1234")).toBe(
      "call me at [phone removed]",
    );
    expect(redactPii("call (602) 555-1234 ok")).toBe(
      "call [phone removed] ok",
    );
    expect(redactPii("+1 602.555.1234")).toBe("[phone removed]");
  });

  it("redacts email addresses", () => {
    expect(redactPii("reach me at jo.user+test@example.org please")).toBe(
      "reach me at [email removed] please",
    );
  });

  it("redacts street addresses", () => {
    expect(redactPii("I live at 123 Main Street in Phoenix")).toBe(
      "I live at [address removed] in Phoenix",
    );
    expect(redactPii("at 45 N Oak Ave")).toBe("at [address removed]");
  });

  it("never touches statute citations", () => {
    const question =
      "Can I vote under ARS 13-904? What about 18 USC 922(g)(1) and section 16-101?";
    expect(redactPii(question)).toBe(question);
  });

  it("never touches duration phrases that mention court", () => {
    const question = "I spent 30 days in court and 5 years on parole.";
    expect(redactPii(question)).toBe(question);
  });

  it("leaves ordinary legal questions unchanged", () => {
    const question =
      "Can I get my record expunged in Texas after a felony conviction?";
    expect(redactPii(question)).toBe(question);
    expect(containsPii(question)).toBe(false);
  });

  it("reports when text contains PII", () => {
    expect(containsPii("ssn 123-45-6789")).toBe(true);
  });
});
