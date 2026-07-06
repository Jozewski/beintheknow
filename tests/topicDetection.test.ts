import { describe, expect, it } from "vitest";

import { detectLegalTopicIds } from "@/lib/legalRetrieval";

describe("detectLegalTopicIds", () => {
  it("detects voting questions", () => {
    expect(detectLegalTopicIds("Can I vote after a felony conviction?")).toContain(
      "voting",
    );
  });

  it("detects expungement questions", () => {
    expect(detectLegalTopicIds("What is expungement?")).toContain("expungement");
    expect(detectLegalTopicIds("How do I get my record sealed?")).toContain(
      "expungement",
    );
  });

  it("detects housing questions", () => {
    expect(
      detectLegalTopicIds("Can a landlord reject my application?"),
    ).toContain("housing");
  });

  it("detects employment questions", () => {
    expect(
      detectLegalTopicIds("Can I get a professional license with a conviction?"),
    ).toContain("employment");
  });

  it("detects police interaction questions", () => {
    expect(detectLegalTopicIds("Can I record police?")).toContain("police");
  });

  it("detects supervision questions", () => {
    expect(
      detectLegalTopicIds("What happens if I violate probation?"),
    ).toContain("supervision");
  });

  it("returns empty for unrelated questions (retrieval still proceeds)", () => {
    expect(detectLegalTopicIds("What's the weather like today?")).toEqual([]);
  });

  it("matches whole words only", () => {
    // "voter" is a keyword but should not fire inside unrelated words.
    expect(detectLegalTopicIds("I love devoted gardening")).toEqual([]);
  });
});
