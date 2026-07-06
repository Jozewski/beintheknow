import { describe, expect, it } from "vitest";

import {
  buildJoPrompt,
  buildLegalContextBlock,
  buildNoAuthorityResponse,
} from "@/lib/chatPrompt";
import type { RetrievedLegalContext } from "@/lib/legalRetrieval";

const statuteContext: RetrievedLegalContext = {
  chunkId: "chunk-1",
  sourceType: "legal-authority",
  sourceId: "authority-1",
  reviewStatus: "approved",
  title: "Restoration of voting rights",
  citation: "Tex. Elec. Code sec. 11.002",
  sourceUrl: "https://statutes.capitol.texas.gov/",
  currentAsOfLabel: "2025",
  text: "A qualified voter must not have been finally convicted of a felony.",
};

const summaryContext: RetrievedLegalContext = {
  chunkId: "chunk-2",
  sourceType: "legal-content",
  sourceId: "content-1",
  reviewStatus: "approved",
  title: "Texas voting rights summary",
  text: "In Texas you can vote again after your full sentence is done.",
  resources: [
    { label: "LawHelp.org Texas", url: "https://texaslawhelp.org" },
  ],
};

describe("buildLegalContextBlock", () => {
  it("numbers sources in order", () => {
    const block = buildLegalContextBlock([statuteContext, summaryContext]);
    expect(block).toContain("[1] Tex. Elec. Code sec. 11.002");
    expect(block).toContain("[2]");
  });

  it("includes source URLs and review status", () => {
    const block = buildLegalContextBlock([statuteContext]);
    expect(block).toContain("URL: https://statutes.capitol.texas.gov/");
    expect(block).toContain("Review status: approved");
  });

  it("appends resource links for curated summaries", () => {
    const block = buildLegalContextBlock([summaryContext]);
    expect(block).toContain("Additional resources:");
    expect(block).toContain("LawHelp.org Texas: https://texaslawhelp.org");
  });

  it("returns empty string for no context", () => {
    expect(buildLegalContextBlock([])).toBe("");
  });
});

describe("buildJoPrompt", () => {
  it("includes identity, safety rules, and the question", () => {
    const { instructions, prompt } = buildJoPrompt({
      question: "Can I vote in Texas?",
      jurisdiction: "state",
      stateCode: "TX",
      retrievedContext: [statuteContext],
    });

    expect(instructions).toContain("You are JO");
    expect(instructions).toContain("do not provide legal advice");
    expect(instructions).toContain(
      "Answer only from the provided legal authority context",
    );
    expect(prompt).toContain("Question: Can I vote in Texas?");
    expect(prompt).toContain("State: TX");
    expect(prompt).toContain("Tex. Elec. Code sec. 11.002");
  });

  it("forbids markdown formatting in answers", () => {
    const { instructions } = buildJoPrompt({
      question: "What is expungement?",
      jurisdiction: "federal",
      retrievedContext: [statuteContext],
    });
    expect(instructions).toContain("Do not use markdown");
  });
});

describe("buildNoAuthorityResponse", () => {
  it("refuses without sources and points to legal aid", () => {
    const response = buildNoAuthorityResponse();
    expect(response).toContain("cited legal sources");
    expect(response.toLowerCase()).toContain("legal aid");
  });
});
