import { describe, expect, it } from "vitest";

import {
  ensureCompleteAnswer,
  isBrokenGeneratedAnswer,
} from "@/lib/answerRepair";

describe("ensureCompleteAnswer", () => {
  it("leaves answers ending in a period unchanged", () => {
    expect(ensureCompleteAnswer("You can vote in Texas.")).toBe(
      "You can vote in Texas.",
    );
  });

  it("leaves answers ending in a citation bracket unchanged", () => {
    expect(ensureCompleteAnswer("You can vote in Texas [1]")).toBe(
      "You can vote in Texas [1]",
    );
    expect(ensureCompleteAnswer("Your record can be sealed [1, 2]")).toBe(
      "Your record can be sealed [1, 2]",
    );
  });

  it("closes an unfinished trailing citation bracket", () => {
    expect(ensureCompleteAnswer("You can vote in Texas [1, 2")).toBe(
      "You can vote in Texas [1, 2]",
    );
  });

  it("trims a short dangling fragment back to the last sentence", () => {
    const result = ensureCompleteAnswer(
      "You can vote after your sentence ends. If you are still on",
    );
    expect(result).toBe(
      "You can vote after your sentence ends. Check the cited source or ask legal aid before you rely on this.",
    );
  });

  it("appends a period and notice when there is no complete sentence", () => {
    const result = ensureCompleteAnswer(
      "this long unfinished thought runs on with no ending punctuation anywhere in the text",
    );
    expect(result.endsWith(
      "Check the cited source or ask legal aid before you rely on this.",
    )).toBe(true);
    expect(result.startsWith("this long unfinished thought")).toBe(true);
  });

  it("handles empty input", () => {
    expect(ensureCompleteAnswer("")).toBe("");
    expect(ensureCompleteAnswer("   ")).toBe("");
  });
});

describe("isBrokenGeneratedAnswer", () => {
  it("flags answers cut off on a conjunction", () => {
    expect(isBrokenGeneratedAnswer("You may qualify if.")).toBe(true);
    expect(isBrokenGeneratedAnswer("The court can act when.")).toBe(true);
  });

  it("flags repaired answers that still read broken", () => {
    expect(
      isBrokenGeneratedAnswer(
        "You may qualify if. Check the cited source or ask legal aid before you rely on this.",
      ),
    ).toBe(true);
  });

  it("accepts complete answers", () => {
    expect(isBrokenGeneratedAnswer("You can vote in Texas [1].")).toBe(false);
    expect(
      isBrokenGeneratedAnswer("A landlord may reject an application."),
    ).toBe(false);
  });
});
