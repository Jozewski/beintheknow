import { createHash } from "node:crypto";

import { states } from "@/data/content-data";
import { LegalAuthorityCandidateModel } from "@/models/LegalAuthorityCandidate";

const RRP_EXPUNGEMENT_CHART_URL =
  "https://ccresourcecenter.org/state-restoration-profiles/50-state-comparisonjudicial-expungement-sealing-and-set-aside-2-2/";

const RRP_SOURCE_ID = "rrp-record-clearance";
const RRP_SOURCE_NAME = "Restoration of Rights Project - Record Relief";
const MAX_SECTION_TEXT_LENGTH = 60_000;

type RrpStateProfile = {
  stateCode: string;
  stateName: string;
  profileUrl: string;
};

export type IngestRrpExpungementOptions = {
  stateCode?: string;
  offset?: number;
  limit?: number;
};

export type IngestRrpExpungementResult = {
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
    .replace(/<\/h[1-6]>/gi, "\n")
    .replace(/<sup[\s\S]*?<\/sup>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/\n\s+/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function normalizeUrl(value: string) {
  if (value.startsWith("http")) return value;
  if (value.startsWith("/")) return `https://ccresourcecenter.org${value}`;

  return new URL(value, RRP_EXPUNGEMENT_CHART_URL).toString();
}

function extractProfileUrls(html: string): RrpStateProfile[] {
  const profiles = new Map<string, RrpStateProfile>();

  for (const match of html.matchAll(
    /<a\b[^>]*href=["']([^"']*state-restoration-profiles[^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi,
  )) {
    const stateName = htmlToText(match[2]);
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
    .filter((profile): profile is RrpStateProfile => Boolean(profile));
}

function extractLastUpdated(profileHtml: string) {
  const text = htmlToText(profileHtml.slice(0, 130_000));
  const match = text.match(
    /Last updated\s*:\s*([A-Za-z]+\s+\d{1,2},\s+\d{4})/i,
  );

  if (!match) return undefined;

  const date = new Date(match[1]);

  return Number.isNaN(date.getTime()) ? undefined : date;
}

function extractExpungementSection(profileHtml: string) {
  const startMatch = profileHtml.match(
    /<h3[^>]*>\s*<span[^>]*id=["']III_[^"']*Expungement[^"']*["'][\s\S]*?<\/h3>/i,
  );

  if (!startMatch || typeof startMatch.index !== "number") return "";

  const start = startMatch.index;
  const remainder = profileHtml.slice(start + startMatch[0].length);
  const endMatch = remainder.match(
    /<h3[^>]*>\s*<span[^>]*id=["']IV_[^"']*["'][\s\S]*?<\/h3>/i,
  );
  const sectionHtml = endMatch
    ? remainder.slice(0, endMatch.index)
    : remainder.slice(0, 80_000);

  return htmlToText(`${startMatch[0]}\n${sectionHtml}`).slice(
    0,
    MAX_SECTION_TEXT_LENGTH,
  );
}

export async function ingestRrpExpungementProfiles({
  stateCode,
  offset = 0,
  limit = 10,
}: IngestRrpExpungementOptions = {}): Promise<IngestRrpExpungementResult> {
  const response = await fetch(RRP_EXPUNGEMENT_CHART_URL, {
    cache: "no-store",
    headers: {
      "user-agent":
        "BeInTheKnow legal education research bot; contact: project owner",
    },
  });

  if (!response.ok) {
    throw new Error(
      `RRP expungement chart fetch failed: ${response.status} ${response.statusText}`,
    );
  }

  const chartHtml = await response.text();
  const normalizedStateCode = stateCode?.toUpperCase();
  const profiles = extractProfileUrls(chartHtml)
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
      const sectionText = extractExpungementSection(profileHtml);

      if (!sectionText) {
        skippedProfiles += 1;
        continue;
      }

      const fetchedAt = new Date();
      const currentAsOf = extractLastUpdated(profileHtml) ?? fetchedAt;
      const candidateKey = hashKey([
        "curated-summary",
        RRP_SOURCE_ID,
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
            sourceId: RRP_SOURCE_ID,
            sourceName: RRP_SOURCE_NAME,
            sourceUrl: profile.profileUrl,
            searchTerms: [
              "expungement criminal record",
              "record sealing conviction",
              "set aside conviction",
              "automatic record clearing",
            ],
            citation: "RRP state profile section III",
            normalizedCitation: "rrp state profile section iii",
            titleHint: `${profile.stateName} expungement and record relief`,
            occurrenceCount: 1,
            status: "needs-review",
            sourceFetchedAt: fetchedAt,
            currentAsOf,
            notes:
              "RRP expungement profile section. Use this to identify eligibility issues and cited statutes; verify official current law before promotion to LegalAuthority.",
            snippets: [
              {
                sourceType: "curated-source",
                sourceId: RRP_SOURCE_ID,
                sourceUrl: profile.profileUrl,
                text: sectionText,
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
    fetchedUrl: RRP_EXPUNGEMENT_CHART_URL,
    scannedProfiles: profiles.length,
    upsertedCandidates,
    skippedProfiles,
    failedProfiles,
  };
}
