import { createHash } from "node:crypto";

import type { TopicId } from "@/data/content-data";
import { states } from "@/data/content-data";
import { stateStatuteSources } from "@/data/legal-sources";
import { getManualSourceTargets } from "@/data/manual-source-targets";
import { getStatuteTopicQueries } from "@/data/statute-topic-queries";
import { topicSourceStrategies } from "@/data/topic-source-strategy";
import { LegalAuthorityCandidateModel } from "@/models/LegalAuthorityCandidate";
import { LegiScanBillTextModel } from "@/models/LegiScanBillText";
import type { AnyBulkWriteOperation } from "mongoose";

type LegiScanBillTextForCitation = {
  docId: number;
  billId: number;
  stateCode: string;
  billNumber?: string;
  topicIds?: string[];
  stateLink?: string;
  url?: string;
  normalizedText?: string;
};

export type SeedOfficialStatuteTargetsResult = {
  scannedTargets: number;
  upsertedTargets: number;
};

export type SeedCuratedSourceTargetsResult = {
  scannedTargets: number;
  upsertedTargets: number;
};

export type SeedManualCurationTargetsResult = {
  scannedTargets: number;
  upsertedTargets: number;
};

export type ExtractStatuteCitationCandidatesOptions = {
  stateCode?: string;
  topicId?: TopicId;
  offset?: number;
  limit?: number;
  force?: boolean;
};

export type ExtractStatuteCitationCandidatesResult = {
  scannedTexts: number;
  textsWithCitations: number;
  citationsFound: number;
  candidatesUpserted: number;
  textsMarked: number;
};

const STATUTE_CITATION_EXTRACTION_VERSION = 2;
const MAX_CITATIONS_PER_TEXT = 40;

const STATUTE_CITATION_PATTERNS = [
  /\b(?:section|sec\.)\s+\d+[A-Za-z]?(?:[-.:]\d+[A-Za-z]?)+(?:\([^)]+\))*/gi,
  /§+\s*\d+[A-Za-z]?(?:[-.:]\d+[A-Za-z]?)+(?:\([^)]+\))*/g,
  /\b(?:title|chapter|article)\s+\d+[A-Za-z]?(?:[-.:]\d+[A-Za-z]?)*\b/gi,
];

function hashKey(parts: string[]) {
  return createHash("sha256").update(parts.join("|")).digest("hex");
}

function normalizeCandidateText(value: string) {
  return value
    .replace(/\s+/g, " ")
    .replace(/[.;,:\s]+$/g, "")
    .trim();
}

function normalizeCitation(value: string) {
  return normalizeCandidateText(value).toLowerCase();
}

function getSnippet(text: string, index: number, length: number) {
  const start = Math.max(0, index - 220);
  const end = Math.min(text.length, index + length + 220);

  return normalizeCandidateText(text.slice(start, end));
}

function findStatuteCitations(text: string) {
  const matches = new Map<string, { citation: string; snippet: string }>();

  for (const pattern of STATUTE_CITATION_PATTERNS) {
    pattern.lastIndex = 0;

    for (const match of text.matchAll(pattern)) {
      if (typeof match.index !== "number") continue;

      const citation = normalizeCandidateText(match[0]);
      const normalizedCitation = normalizeCitation(citation);

      if (citation.length < 4 || citation.length > 120) continue;
      if (!/\d/.test(citation)) continue;

      matches.set(normalizedCitation, {
        citation,
        snippet: getSnippet(text, match.index, match[0].length),
      });
    }
  }

  return Array.from(matches.values()).slice(0, MAX_CITATIONS_PER_TEXT);
}

export async function seedOfficialStatuteTargets(
  topicId?: TopicId,
): Promise<SeedOfficialStatuteTargetsResult> {
  const topicQueries = getStatuteTopicQueries(topicId);
  let scannedTargets = 0;
  let upsertedTargets = 0;

  for (const source of stateStatuteSources) {
    if (!source.stateCode) continue;

    for (const query of topicQueries) {
      scannedTargets += 1;

      const candidateKey = hashKey([
        "official-search-target",
        source.stateCode,
        query.topicId,
        source.id,
      ]);

      await LegalAuthorityCandidateModel.updateOne(
        { candidateKey },
        {
          $set: {
            candidateType: "official-search-target",
            jurisdiction: "state",
            stateCode: source.stateCode,
            topicId: query.topicId,
            sourceId: source.id,
            sourceName: source.label,
            sourceUrl: source.url,
            searchTerms: query.terms,
            titleHint: query.label,
            status:
              source.adapterStatus === "ready"
                ? "needs-review"
                : "needs-adapter",
            notes:
              "Official statute source target. Exact sections must be verified against this source before promotion to LegalAuthority.",
          },
          $setOnInsert: {
            occurrenceCount: 0,
            snippets: [],
          },
        },
        { upsert: true },
      );

      upsertedTargets += 1;
    }
  }

  return { scannedTargets, upsertedTargets };
}

export async function seedCuratedSourceTargets(
  topicId?: TopicId,
): Promise<SeedCuratedSourceTargetsResult> {
  const strategies = topicId
    ? topicSourceStrategies.filter((strategy) => strategy.topicId === topicId)
    : topicSourceStrategies;
  let scannedTargets = 0;
  let upsertedTargets = 0;

  for (const strategy of strategies) {
    for (const source of strategy.primarySources) {
      const targetStates = source.stateScoped
        ? states.map((state) => state.code)
        : ["FEDERAL"];

      for (const targetState of targetStates) {
        scannedTargets += 1;

        const candidateKey = hashKey([
          "curated-source-target",
          targetState,
          strategy.topicId,
          source.id,
        ]);

        await LegalAuthorityCandidateModel.updateOne(
          { candidateKey },
          {
            $set: {
              candidateType: "curated-source-target",
              jurisdiction: targetState === "FEDERAL" ? "federal" : "state",
              stateCode: targetState === "FEDERAL" ? undefined : targetState,
              topicId: strategy.topicId,
              sourceId: source.id,
              sourceName: source.label,
              sourceUrl: source.url,
              searchTerms: strategy.answerCaveats,
              titleHint: source.role,
              status:
                source.accessMethod === "manual-curation"
                  ? "needs-review"
                  : "needs-adapter",
              notes:
                source.notes ??
                "Curated source target. Extract citations and verify current legal text before promotion to LegalAuthority.",
            },
            $setOnInsert: {
              occurrenceCount: 0,
              snippets: [],
            },
          },
          { upsert: true },
        );

        upsertedTargets += 1;
      }
    }
  }

  return { scannedTargets, upsertedTargets };
}

export async function seedManualCurationTargets(
  topicId?: TopicId,
): Promise<SeedManualCurationTargetsResult> {
  const targets = getManualSourceTargets(topicId);
  let scannedTargets = 0;
  let upsertedTargets = 0;

  for (const target of targets) {
    scannedTargets += 1;

    const targetState = target.stateCode ?? "FEDERAL";
    const candidateKey = hashKey([
      "manual-curation-target",
      targetState,
      target.topicId,
      target.id,
    ]);

    await LegalAuthorityCandidateModel.updateOne(
      { candidateKey },
      {
        $set: {
          candidateType: "manual-curation-target",
          jurisdiction: target.stateCode ? "state" : "federal",
          stateCode: target.stateCode,
          topicId: target.topicId,
          sourceId: target.id,
          sourceName: target.sourceName,
          sourceUrl: target.sourceUrl,
          searchTerms: target.searchTerms,
          titleHint: target.targetKind,
          status:
            target.accessMethod === "official-statute-adapter"
              ? "needs-adapter"
              : "needs-review",
          notes: [
            target.notes,
            `Source role: ${target.sourceRole}.`,
            target.citationBacked
              ? "Citation-backed target; verify exact law text before promotion."
              : "Manual guidance target; do not promote as legal authority without review.",
          ].join(" "),
        },
        $setOnInsert: {
          occurrenceCount: 0,
          snippets: [],
        },
      },
      { upsert: true },
    );

    upsertedTargets += 1;
  }

  return { scannedTargets, upsertedTargets };
}

export async function extractStatuteCitationCandidates({
  stateCode,
  topicId,
  offset = 0,
  limit = 100,
  force = false,
}: ExtractStatuteCitationCandidatesOptions = {}): Promise<ExtractStatuteCitationCandidatesResult> {
  const query: {
    textExtractionStatus: "extracted";
    normalizedText: { $ne: string };
    stateCode?: string;
    topicIds?: string;
    statuteCitationExtractionVersion?: { $ne: number };
  } = {
    textExtractionStatus: "extracted",
    normalizedText: { $ne: "" },
  };

  if (stateCode) query.stateCode = stateCode.toUpperCase();
  if (topicId) query.topicIds = topicId;
  if (!force) {
    query.statuteCitationExtractionVersion = {
      $ne: STATUTE_CITATION_EXTRACTION_VERSION,
    };
  }

  const texts = await LegiScanBillTextModel.find(query)
    .select({
      docId: 1,
      billId: 1,
      stateCode: 1,
      billNumber: 1,
      topicIds: 1,
      stateLink: 1,
      url: 1,
      normalizedText: 1,
    })
    .sort({ docId: 1 })
    .skip(offset)
    .limit(limit)
    .lean<LegiScanBillTextForCitation[]>()
    .exec();

  let textsWithCitations = 0;
  let citationsFound = 0;
  let candidatesUpserted = 0;
  let textsMarked = 0;
  const candidateOperations: AnyBulkWriteOperation[] = [];
  const markedDocIds: number[] = [];

  for (const textRecord of texts) {
    const citations = findStatuteCitations(textRecord.normalizedText ?? "");

    if (citations.length === 0) {
      markedDocIds.push(textRecord.docId);
      textsMarked += 1;
      continue;
    }

    textsWithCitations += 1;
    citationsFound += citations.length;

    const source = stateStatuteSources.find(
      (entry) => entry.stateCode === textRecord.stateCode,
    );
    const sourceId = source?.id ?? `${textRecord.stateCode.toLowerCase()}-statutes`;
    const sourceName = source?.label ?? `${textRecord.stateCode} statutes`;
    const sourceUrl = source?.url ?? textRecord.stateLink ?? textRecord.url ?? "";
    const sourceRecordId = String(textRecord.docId);
    const sourceUrlForSnippet = textRecord.stateLink ?? textRecord.url;
    const candidateTopicIds =
      topicId && textRecord.topicIds?.includes(topicId)
        ? [topicId]
        : textRecord.topicIds ?? [];

    for (const candidateTopicId of candidateTopicIds) {
      for (const citation of citations) {
        const normalizedCitation = normalizeCitation(citation.citation);
        const candidateKey = hashKey([
          "statute-citation",
          textRecord.stateCode,
          candidateTopicId,
          normalizedCitation,
        ]);

        candidateOperations.push({
          updateOne: {
            filter: { candidateKey },
            update: {
              $set: {
                candidateType: "statute-citation",
                jurisdiction: "state",
                stateCode: textRecord.stateCode,
                topicId: candidateTopicId,
                sourceId,
                sourceName,
                sourceUrl,
                citation: citation.citation,
                normalizedCitation,
                status: "needs-review",
                notes:
                  "Citation candidate mined from LegiScan bill text. Verify current law text against the official statute source before use in answers.",
              },
              $inc: { occurrenceCount: 1 },
              $addToSet: {
                snippets: {
                  sourceType: "legiscan-bill-text",
                  sourceId: sourceRecordId,
                  sourceUrl: sourceUrlForSnippet,
                  text: citation.snippet,
                },
              },
            },
            upsert: true,
          },
        });

        candidatesUpserted += 1;
      }
    }

    markedDocIds.push(textRecord.docId);
    textsMarked += 1;
  }

  if (candidateOperations.length > 0) {
    await LegalAuthorityCandidateModel.bulkWrite(candidateOperations, {
      ordered: false,
    });
  }

  if (markedDocIds.length > 0) {
    await LegiScanBillTextModel.updateMany(
      { docId: { $in: markedDocIds } },
      {
        $set: {
          statuteCitationExtractedAt: new Date(),
          statuteCitationExtractionVersion: STATUTE_CITATION_EXTRACTION_VERSION,
        },
      },
    );
  }

  return {
    scannedTexts: texts.length,
    textsWithCitations,
    citationsFound,
    candidatesUpserted,
    textsMarked,
  };
}
