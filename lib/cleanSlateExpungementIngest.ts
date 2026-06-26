import { createHash } from "node:crypto";

import { states } from "@/data/content-data";
import { LegalAuthorityCandidateModel } from "@/models/LegalAuthorityCandidate";

const CLEAN_SLATE_STATES_URL =
  "https://nationalreentryresourcecenter.org/cleanslate/states";
const CLEAN_SLATE_SOURCE_ID = "clean-slate-clearinghouse";
const CLEAN_SLATE_SOURCE_NAME = "Clean Slate Clearinghouse";
const MAX_SECTION_TEXT_LENGTH = 60_000;

type CleanSlateStateProfile = {
  stateCode: string;
  stateName: string;
  profileUrl: string;
};

export type IngestCleanSlateExpungementOptions = {
  stateCode?: string;
  offset?: number;
  limit?: number;
};

export type IngestCleanSlateExpungementResult = {
  fetchedUrl: string;
  scannedProfiles: number;
  upsertedCandidates: number;
  skippedProfiles: number;
  failedProfiles: number;
};

const stateCodeByName = new Map(
  states.map((state) => [state.name.toLowerCase(), state.code]),
);

function hashKey(parts: string[]) {
  return createHash("sha256").update(parts.join("|")).digest("hex");
}

function decodeHtmlEntities(value: string) {
  return value
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&#038;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&#x([0-9a-f]+);/gi, (_, hexValue: string) =>
      String.fromCodePoint(Number.parseInt(hexValue, 16)),
    )
    .replace(/&#(\d+);/g, (_, decimalValue: string) =>
      String.fromCodePoint(Number.parseInt(decimalValue, 10)),
    );
}

function htmlToText(value: string) {
  return decodeHtmlEntities(value)
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<\/li>/gi, "\n")
    .replace(/<\/h[1-6]>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/\u202f/g, " ")
    .replace(/\u00a0/g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/\n\s+/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function normalizeUrl(value: string) {
  if (value.startsWith("http")) return value;
  if (value.startsWith("/")) {
    return `https://nationalreentryresourcecenter.org${value}`;
  }

  return new URL(value, CLEAN_SLATE_STATES_URL).toString();
}

function extractStateProfiles(statesHtml: string): CleanSlateStateProfile[] {
  const profiles = new Map<string, CleanSlateStateProfile>();

  for (const match of statesHtml.matchAll(
    /<a\b[^>]*href=["']([^"']*\/cleanslate\/states\/[^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi,
  )) {
    const stateName = htmlToText(
      match[2].match(/data-info=["']&lt;div&gt;([^"']+)&lt;\/div&gt;["']/i)?.[1] ??
        match[2],
    );
    const stateCode = stateCodeByName.get(stateName.toLowerCase());

    if (!stateCode || profiles.has(stateCode)) continue;

    profiles.set(stateCode, {
      stateCode,
      stateName,
      profileUrl: normalizeUrl(match[1]),
    });
  }

  return states
    .map((state) => profiles.get(state.code))
    .filter((profile): profile is CleanSlateStateProfile => Boolean(profile));
}

function extractAdultRecordSection(profileHtml: string) {
  const start = profileHtml.search(/Adult Criminal Record Clearance Overview/i);
  if (start < 0) return "";

  const remainder = profileHtml.slice(start);
  const end = remainder.search(/Juvenile Record Clearance Overview/i);
  const sectionHtml = end >= 0 ? remainder.slice(0, end) : remainder;

  return htmlToText(sectionHtml).slice(0, MAX_SECTION_TEXT_LENGTH);
}

function extractPolicyLinks(profileHtml: string) {
  return Array.from(
    new Set(
      Array.from(
        profileHtml.matchAll(
          /href=["']([^"']*\/cleanslate\/states\/[^"']+\/policies\/[^"']+)["']/gi,
        ),
      ).map((match) => normalizeUrl(match[1])),
    ),
  );
}

export async function ingestCleanSlateExpungementProfiles({
  stateCode,
  offset = 0,
  limit = 10,
}: IngestCleanSlateExpungementOptions = {}): Promise<IngestCleanSlateExpungementResult> {
  const statesResponse = await fetch(CLEAN_SLATE_STATES_URL, {
    cache: "no-store",
    headers: {
      "user-agent":
        "BeInTheKnow legal education research bot; contact: project owner",
    },
  });

  if (!statesResponse.ok) {
    throw new Error(
      `Clean Slate states fetch failed: ${statesResponse.status} ${statesResponse.statusText}`,
    );
  }

  const statesHtml = await statesResponse.text();
  const normalizedStateCode = stateCode?.toUpperCase();
  const profiles = extractStateProfiles(statesHtml)
    .filter((profile) =>
      normalizedStateCode ? profile.stateCode === normalizedStateCode : true,
    )
    .slice(offset, offset + limit);
  let upsertedCandidates = 0;
  let skippedProfiles = 0;
  let failedProfiles = 0;

  for (const profile of profiles) {
    try {
      const profileResponse = await fetch(profile.profileUrl, {
        cache: "no-store",
        headers: {
          "user-agent":
            "BeInTheKnow legal education research bot; contact: project owner",
        },
      });

      if (!profileResponse.ok) {
        failedProfiles += 1;
        continue;
      }

      const profileHtml = await profileResponse.text();
      const sectionText = extractAdultRecordSection(profileHtml);

      if (!sectionText) {
        skippedProfiles += 1;
        continue;
      }

      const policyLinks = extractPolicyLinks(profileHtml);
      const fetchedAt = new Date();
      const candidateKey = hashKey([
        "curated-summary",
        CLEAN_SLATE_SOURCE_ID,
        "expungement",
        profile.stateCode,
      ]);

      await LegalAuthorityCandidateModel.updateOne(
        { candidateKey },
        {
          $set: {
            candidateType: "curated-summary",
            jurisdiction: "state",
            stateCode: profile.stateCode,
            topicId: "expungement",
            sourceId: CLEAN_SLATE_SOURCE_ID,
            sourceName: CLEAN_SLATE_SOURCE_NAME,
            sourceUrl: profile.profileUrl,
            searchTerms: [
              "adult criminal record clearance",
              "expungement",
              "record sealing",
              "clean slate",
            ],
            citation: "Clean Slate state adult criminal record clearance profile",
            normalizedCitation:
              "clean slate state adult criminal record clearance profile",
            titleHint: `${profile.stateName} adult criminal record clearance`,
            occurrenceCount: policyLinks.length,
            status: "needs-review",
            sourceFetchedAt: fetchedAt,
            currentAsOf: fetchedAt,
            notes:
              "Clean Slate Clearinghouse adult criminal record clearance summary. Use as a cross-check and policy index; verify cited statutes against official state sources before promotion to LegalAuthority.",
            snippets: [
              {
                sourceType: "curated-source",
                sourceId: CLEAN_SLATE_SOURCE_ID,
                sourceUrl: profile.profileUrl,
                text: [
                  sectionText,
                  policyLinks.length > 0
                    ? `Policy detail links:\n${policyLinks.join("\n")}`
                    : "",
                ]
                  .filter(Boolean)
                  .join("\n\n"),
              },
            ],
          },
        },
        { upsert: true },
      );

      upsertedCandidates += 1;
    } catch {
      failedProfiles += 1;
    }
  }

  return {
    fetchedUrl: CLEAN_SLATE_STATES_URL,
    scannedProfiles: profiles.length,
    upsertedCandidates,
    skippedProfiles,
    failedProfiles,
  };
}
