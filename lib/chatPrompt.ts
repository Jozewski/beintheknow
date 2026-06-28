import type { RetrievedLegalContext } from "@/lib/legalRetrieval";

type BuildJoPromptOptions = {
  question: string;
  jurisdiction: "federal" | "state";
  stateCode?: string;
  retrievedContext: RetrievedLegalContext[];
};

export function buildNoAuthorityResponse() {
  return "I do not have enough trusted source text to answer that yet. JO should only answer from cited legal sources. Please check with legal aid or try again after we add and review the right source.";
}

export function buildGenerationFailureResponse() {
  return "I found useful legal sources, but I could not turn them into a clear answer right now. Please read the cited official sources or ask legal aid for help with your exact situation.";
}

function getShortSourceText(value: string) {
  const compact = value
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .trim();

  if (compact.length <= 260) return compact;

  const sentenceEnd = compact.search(/[.!?]\s/);
  if (sentenceEnd >= 80 && sentenceEnd <= 260) {
    return compact.slice(0, sentenceEnd + 1);
  }

  return `${compact.slice(0, 257).trim()}...`;
}

function getLikelyTopicSummary(question: string) {
  const normalized = question.toLowerCase();

  if (
    normalized.includes("expunge") ||
    normalized.includes("expungement") ||
    normalized.includes("seal") ||
    normalized.includes("record")
  ) {
    return "Expungement is a court process that can clear, seal, or limit access to a criminal record. Some states use a different name for this, like sealing, set aside, or record clearance.";
  }

  return "I found official legal sources for this question. Here is the key source text in plain English.";
}

function getPlainSourceSummary(item: RetrievedLegalContext) {
  const title = item.title?.toLowerCase() ?? "";

  if (title.includes("setting aside")) {
    return "This source says a court may set aside a guilty judgment when the law's conditions are met. That can dismiss the charges, but it does not erase every possible record use.";
  }

  if (title.includes("sealing")) {
    return "This source says a person may ask a court to seal arrest, conviction, or sentencing records when the law's conditions are met.";
  }

  return getShortSourceText(item.text);
}

export function buildSourceBasedFallbackResponse({
  question,
  retrievedContext,
}: BuildJoPromptOptions) {
  const sourceLines = retrievedContext.slice(0, 3).map((item, index) => {
    const label = item.title ?? item.citation ?? item.sourceName ?? "Source";
    return `- [${index + 1}] ${label}: ${getPlainSourceSummary(item)}`;
  });

  return [
    getLikelyTopicSummary(question),
    "What the official sources say:",
    ...sourceLines,
    "Check the cited official source or ask legal aid before you rely on this for your exact situation.",
  ].join("\n\n");
}

export function buildLegalContextBlock(retrievedContext: RetrievedLegalContext[]) {
  if (retrievedContext.length === 0) return "";

  return retrievedContext
    .map((item, index) => {
      const sourceLabel =
        item.citation ?? item.title ?? item.sourceName ?? item.sourceId;

      return [
        `[${index + 1}] ${sourceLabel}`,
        item.title ? `Title: ${item.title}` : undefined,
        item.sourceName ? `Source: ${item.sourceName}` : undefined,
        item.sourceUrl ? `URL: ${item.sourceUrl}` : undefined,
        item.reviewStatus ? `Review status: ${item.reviewStatus}` : undefined,
        item.currentAsOfLabel
          ? `Current as of: ${item.currentAsOfLabel}`
          : undefined,
        item.text,
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n\n");
}

export function buildJoPrompt({
  question,
  jurisdiction,
  stateCode,
  retrievedContext,
}: BuildJoPromptOptions) {
  const reviewNotice =
    process.env.NODE_ENV === "production"
      ? ""
      : "The retrieved sources are official legal authority records. If a source date matters, mention the current-as-of label.";

  return {
    instructions: [
      "You are JO, a plain-English legal rights education assistant.",
      "You provide general legal rights education only. You do not provide legal advice and you do not create an attorney-client relationship.",
      "Answer only from the provided legal authority context. Do not use memory or outside knowledge to add statutes, citations, deadlines, agencies, exceptions, or eligibility rules.",
      "If the legal authority context is incomplete, say what is missing and recommend verifying with legal aid or the cited official source.",
      "Do not cite any source that is not included in the legal authority context.",
      "Use inline citations exactly as bracket numbers, like [1] and [2].",
      "Always finish citation brackets. Write [1], not [1 or [1.",
      "Mention the current-as-of label when it affects confidence or when the source text says verification is needed.",
      "Write for a sixth-grade reading level.",
      "Use short words and short sentences. Aim for 15 words or fewer per sentence.",
      "Use everyday words. Say law or rule instead of statute when possible.",
      "Do not use legal jargon unless the source makes it necessary.",
      "If you must use a legal word, explain it right away in simple words.",
      "Prefer clear phrases like must finish your sentence, record cleared, court order, legal aid lawyer, and official source.",
      "Avoid phrases like statutory framework, operative authority, aforementioned, pursuant to, herein, disqualifying criteria, and collateral consequences.",
      "Answer in this order when possible: short answer, what the source says, facts that matter, next step.",
      "Use bullets only when they make the answer easier to read.",
      "Use plain English. Keep the answer concise, practical, and calm.",
      "Write complete sentences. End with a complete final sentence.",
      "Do not make deadline, eligibility, or application-form promises unless the source context states them.",
      "When the answer depends on facts not provided by the user, name those facts and avoid reaching a final conclusion.",
      reviewNotice,
    ]
      .filter(Boolean)
      .join("\n"),
    prompt: [
      `Jurisdiction: ${jurisdiction}`,
      stateCode ? `State: ${stateCode}` : undefined,
      `Question: ${question}`,
      "Legal authority context:",
      buildLegalContextBlock(retrievedContext),
    ]
      .filter(Boolean)
      .join("\n\n"),
  };
}
