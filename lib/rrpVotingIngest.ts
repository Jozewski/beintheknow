import { createHash } from "node:crypto";

import { states } from "@/data/content-data";
import { LegalAuthorityCandidateModel } from "@/models/LegalAuthorityCandidate";

const RRP_VOTING_CHART_URL =
  "https://ccresourcecenter.org/state-restoration-profiles/chart-1-loss-and-restoration-of-civil-rights-and-firearms-privileges/";

const RRP_SOURCE_ID = "rrp-voting";
const RRP_SOURCE_NAME = "Restoration of Rights Project - Voting Rights";

type RrpVotingChartEntry = {
  stateCode: string;
  stateName: string;
  summary: string;
  profileUrl: string;
};

export type IngestRrpVotingResult = {
  fetchedUrl: string;
  parsedEntries: number;
  upsertedCandidates: number;
  skippedEntries: number;
};

const stateCodeByName = new Map(
  states.map((state) => [state.name.toLowerCase(), state.code]),
);
const stateNameByCode = new Map(states.map((state) => [state.code, state.name]));

for (const [alias, code] of [
  ["n. hampshire", "NH"],
  ["s. carolina", "SC"],
  ["s. dakota", "SD"],
  ["w. virginia", "WV"],
] satisfies Array<[string, string]>) {
  stateCodeByName.set(alias, code);
}

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
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<sup[\s\S]*?<\/sup>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeUrl(value: string) {
  if (value.startsWith("http")) return value;
  if (value.startsWith("/")) return `https://ccresourcecenter.org${value}`;

  return new URL(value, RRP_VOTING_CHART_URL).toString();
}

function extractTables(html: string) {
  return Array.from(html.matchAll(/<table\b[\s\S]*?<\/table>/gi)).map(
    (match) => match[0],
  );
}

function extractRows(tableHtml: string) {
  return Array.from(tableHtml.matchAll(/<tr\b[\s\S]*?<\/tr>/gi)).map(
    (match) => match[0],
  );
}

function extractCells(rowHtml: string) {
  return Array.from(rowHtml.matchAll(/<t[dh]\b[\s\S]*?<\/t[dh]>/gi)).map(
    (match) => match[0],
  );
}

function extractFirstHref(value: string) {
  const match = value.match(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/i);

  return match ? normalizeUrl(match[1]) : RRP_VOTING_CHART_URL;
}

function extractProfileUrlsByStateCode(html: string) {
  const profileUrlsByStateCode = new Map<string, string>();

  for (const match of html.matchAll(
    /<a\b[^>]*href=["']([^"']*state-restoration-profiles[^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi,
  )) {
    const stateName = htmlToText(match[2]);
    const stateCode = stateCodeByName.get(stateName.toLowerCase());

    if (!stateCode || profileUrlsByStateCode.has(stateCode)) continue;

    profileUrlsByStateCode.set(stateCode, normalizeUrl(match[1]));
  }

  return profileUrlsByStateCode;
}

function parseDetailedVotingTable(html: string): RrpVotingChartEntry[] {
  const table = extractTables(html)[2];
  if (!table) return [];

  const entries: RrpVotingChartEntry[] = [];
  const profileUrlsByStateCode = extractProfileUrlsByStateCode(html);

  for (const row of extractRows(table).slice(1)) {
    const cells = extractCells(row);
    const stateCode = htmlToText(cells[0] ?? "").toUpperCase();
    const stateName = stateNameByCode.get(stateCode);
    const summary = htmlToText(cells[1] ?? "");

    if (!stateName || !summary) continue;

    entries.push({
      stateCode,
      stateName,
      summary,
      profileUrl:
        profileUrlsByStateCode.get(stateCode) ?? extractFirstHref(cells[0] ?? ""),
    });
  }

  return entries;
}

function parseOverviewVotingTable(html: string): RrpVotingChartEntry[] {
  const table = extractTables(html)[0];
  if (!table) return [];

  const rows = extractRows(table);
  const headerCells = extractCells(rows[0] ?? "");
  const categories = headerCells.map((cell) => htmlToText(cell));
  const entries: RrpVotingChartEntry[] = [];

  for (const row of rows.slice(1)) {
    const cells = extractCells(row);

    cells.forEach((cell, cellIndex) => {
      const category = categories[cellIndex];
      if (!category) return;

      for (const match of cell.matchAll(
        /<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi,
      )) {
        const stateName = htmlToText(match[2]);
        const stateCode = stateCodeByName.get(stateName.toLowerCase());

        if (!stateCode) continue;

        entries.push({
          stateCode,
          stateName,
          summary: category,
          profileUrl: normalizeUrl(match[1]),
        });
      }
    });
  }

  return entries;
}

function parseRrpVotingChart(html: string): RrpVotingChartEntry[] {
  const detailedEntries = parseDetailedVotingTable(html);

  return detailedEntries.length >= 50
    ? detailedEntries
    : parseOverviewVotingTable(html);
}

export async function ingestRrpVotingChart(): Promise<IngestRrpVotingResult> {
  const response = await fetch(RRP_VOTING_CHART_URL, {
    cache: "no-store",
    headers: {
      "user-agent":
        "BeInTheKnow legal education research bot; contact: project owner",
    },
  });

  if (!response.ok) {
    throw new Error(
      `RRP voting chart fetch failed: ${response.status} ${response.statusText}`,
    );
  }

  const html = await response.text();
  const entries = parseRrpVotingChart(html);
  const fetchedAt = new Date();
  let upsertedCandidates = 0;
  let skippedEntries = 0;

  for (const entry of entries) {
    const candidateKey = hashKey([
      "curated-summary",
      RRP_SOURCE_ID,
      "voting",
      entry.stateCode,
    ]);

    const result = await LegalAuthorityCandidateModel.updateOne(
      { candidateKey },
      {
        $set: {
          candidateType: "curated-summary",
          jurisdiction: "state",
          stateCode: entry.stateCode,
          topicId: "voting",
          sourceId: RRP_SOURCE_ID,
          sourceName: RRP_SOURCE_NAME,
          sourceUrl: RRP_VOTING_CHART_URL,
          searchTerms: [
            "felony conviction voting rights restoration",
            "criminal disenfranchisement",
            "civil rights restoration",
          ],
          citation: entry.summary,
          normalizedCitation: entry.summary.toLowerCase(),
          titleHint: `${entry.stateName} voting rights restoration`,
          occurrenceCount: 1,
          status: "needs-review",
          sourceFetchedAt: fetchedAt,
          currentAsOf: fetchedAt,
          notes:
            "RRP voting chart summary. Use this to guide official statute verification; do not treat as verified statute text.",
          snippets: [
            {
              sourceType: "curated-source",
              sourceId: RRP_SOURCE_ID,
              sourceUrl: entry.profileUrl,
              text: `${entry.stateName}: ${entry.summary}. Profile: ${entry.profileUrl}`,
            },
          ],
        },
      },
      { upsert: true },
    );

    if (result.acknowledged) {
      upsertedCandidates += 1;
    } else {
      skippedEntries += 1;
    }
  }

  return {
    fetchedUrl: RRP_VOTING_CHART_URL,
    parsedEntries: entries.length,
    upsertedCandidates,
    skippedEntries,
  };
}
