import { createHash } from "node:crypto";

import { states, type TopicId } from "@/data/content-data";
import { LegalAuthorityCandidateModel } from "@/models/LegalAuthorityCandidate";

const NICCC_CONSEQUENCES_URL =
  "https://niccc.nationalreentryresourcecenter.org/consequences";
const NICCC_AJAX_URL =
  "https://niccc.nationalreentryresourcecenter.org/consequences/ajax";
const NICCC_SOURCE_NAME =
  "National Inventory of Collateral Consequences of Conviction";
const MAX_DETAIL_TEXT_LENGTH = 30_000;

type NicccTopic = Extract<TopicId, "housing" | "employment">;

type NicccResult = {
  detailId: string;
  detailUrl: string;
  title: string;
  citation: string;
};

type NicccDetail = {
  title: string;
  citation: string;
  citationUrl?: string;
  currentThrough?: string;
  text: string;
};

export type IngestNicccOptions = {
  topic: NicccTopic;
  stateCode?: string;
  offset?: number;
  limit?: number;
  maxPagesPerState?: number;
};

export type IngestNicccResult = {
  topic: NicccTopic;
  scannedStates: number;
  searchedPages: number;
  resultsFound: number;
  detailsFetched: number;
  upsertedCandidates: number;
  skippedResults: number;
  failedResults: number;
};

export type IngestNicccExportResult = {
  topic: NicccTopic;
  scannedStates: number;
  rowsFound: number;
  upsertedCandidates: number;
  skippedRows: number;
  failedRows: number;
};

const topicConfig: Record<
  NicccTopic,
  {
    sourceId: string;
    consequenceIds: string[];
    searchTerms: string[];
  }
> = {
  housing: {
    sourceId: "niccc-housing",
    consequenceIds: ["239"],
    searchTerms: [
      "housing and residency",
      "tenant screening",
      "public housing",
      "criminal record housing consequence",
    ],
  },
  employment: {
    sourceId: "niccc-employment",
    consequenceIds: ["234", "377", "396"],
    searchTerms: [
      "employment and volunteering",
      "occupational licensing",
      "professional licensure",
      "criminal record employment consequence",
    ],
  },
};

function hashKey(parts: string[]) {
  return createHash("sha256").update(parts.join("|")).digest("hex");
}

function decodeHtmlEntities(value: string) {
  return value
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&raquo;/gi, "»")
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
    .replace(/<[^>]+>/g, " ")
    .replace(/\u00a0/g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/\n\s+/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function absoluteNicccUrl(value: string) {
  if (value.startsWith("http")) return value;
  if (value.startsWith("/")) {
    return `https://niccc.nationalreentryresourcecenter.org${value}`;
  }

  return new URL(value, NICCC_CONSEQUENCES_URL).toString();
}

function extractOptions(html: string, id: string) {
  const match = html.match(
    new RegExp(`<select[^>]*id=["']${id}["'][\\s\\S]*?<\\/select>`, "i"),
  );
  if (!match) return [];

  return Array.from(
    match[0].matchAll(/<option value=["']([^"']+)["'][^>]*>([\s\S]*?)<\/option>/gi),
  ).map((optionMatch) => ({
    value: optionMatch[1],
    label: htmlToText(optionMatch[2]),
  }));
}

async function getJurisdictionIds() {
  const response = await fetch(NICCC_CONSEQUENCES_URL, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(
      `NICCC consequence form fetch failed: ${response.status} ${response.statusText}`,
    );
  }

  const html = await response.text();
  const stateCodeByName = new Map(
    states.map((state) => [state.name.toLowerCase(), state.code]),
  );

  return new Map(
    extractOptions(html, "jurisdictions")
      .map((option) => ({
        stateCode: stateCodeByName.get(option.label.toLowerCase()),
        jurisdictionId: option.value,
      }))
      .filter(
        (option): option is { stateCode: string; jurisdictionId: string } =>
          Boolean(option.stateCode),
      )
      .map((option) => [option.stateCode, option.jurisdictionId]),
  );
}

async function searchNicccPage({
  jurisdictionId,
  consequenceIds,
  page,
}: {
  jurisdictionId: string;
  consequenceIds: string[];
  page: number;
}) {
  const body = new URLSearchParams();
  body.append("keywords", "");
  body.append("entry_jurisdiction[]", jurisdictionId);
  for (const consequenceId of consequenceIds) {
    body.append("consequences[]", consequenceId);
  }
  body.append("page", String(page));

  const response = await fetch(NICCC_AJAX_URL, {
    method: "POST",
    cache: "no-store",
    headers: {
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "user-agent":
        "BeInTheKnow legal education research bot; contact: project owner",
    },
    body,
  });

  if (!response.ok) {
    throw new Error(
      `NICCC AJAX search failed: ${response.status} ${response.statusText}`,
    );
  }

  return response.text();
}

async function exportNicccCsv({
  jurisdictionId,
  consequenceIds,
}: {
  jurisdictionId: string;
  consequenceIds: string[];
}) {
  const body = new URLSearchParams();
  body.append("keywords", "");
  body.append("entry_jurisdiction[]", jurisdictionId);
  for (const consequenceId of consequenceIds) {
    body.append("consequences[]", consequenceId);
  }
  body.append("page", "0");

  const response = await fetch(
    "https://niccc.nationalreentryresourcecenter.org/consequences/print",
    {
      method: "POST",
      cache: "no-store",
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "user-agent":
          "BeInTheKnow legal education research bot; contact: project owner",
      },
      body,
    },
  );

  if (!response.ok) {
    throw new Error(
      `NICCC CSV export failed: ${response.status} ${response.statusText}`,
    );
  }

  return response.text();
}

function parseCsv(value: string) {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let index = 0; index < value.length; index += 1) {
    const char = value[index];
    const next = value[index + 1];

    if (char === '"' && inQuotes && next === '"') {
      field += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(field);
      field = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
      continue;
    }

    field += char;
  }

  if (field || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  const [header, ...dataRows] = rows;
  if (!header) return [];

  return dataRows
    .filter((dataRow) => dataRow.some((cell) => cell.trim()))
    .map((dataRow) =>
      Object.fromEntries(
        header.map((column, index) => [column, dataRow[index] ?? ""]),
      ),
    );
}

function parseResultRows(html: string): NicccResult[] {
  return Array.from(html.matchAll(/<tr class="(?:even|odd)">([\s\S]*?)<\/tr>/gi))
    .map((rowMatch) => {
      const row = rowMatch[1];
      const citation =
        htmlToText(
          row.match(/<span class="citation">([\s\S]*?)<\/span>/i)?.[1] ?? "",
        ) || "NICCC consequence";
      const link = row.match(/<a href=["']([^"']*\/consequences\/(\d+))["'][^>]*>([\s\S]*?)<\/a>/i);

      if (!link) return undefined;

      return {
        detailId: link[2],
        detailUrl: absoluteNicccUrl(link[1]),
        title: htmlToText(link[3]),
        citation,
      };
    })
    .filter((result): result is NicccResult => Boolean(result));
}

function hasNextPage(html: string) {
  return /id="next" class="consequence_results_pager/i.test(html);
}

function extractSectionText(html: string, heading: string) {
  const headingPattern = new RegExp(
    `<h3 class="section-title">${heading}<\\/h3>`,
    "i",
  );
  const headingMatch = html.match(headingPattern);
  if (!headingMatch || typeof headingMatch.index !== "number") return "";

  const start = headingMatch.index;
  const remainder = html.slice(start + headingMatch[0].length);
  const nextSection = remainder.search(/<div class="section">\s*<h3 class="section-title">/i);
  const sectionHtml =
    nextSection >= 0
      ? html.slice(start, start + headingMatch[0].length + nextSection)
      : html.slice(start);
  const withoutHelp = sectionHtml.replace(/<i\b[\s\S]*?<\/i>/gi, " ");

  return htmlToText(withoutHelp).replace(new RegExp(`^${heading}\\s*`, "i"), "");
}

async function fetchNicccDetail(result: NicccResult): Promise<NicccDetail> {
  const response = await fetch(result.detailUrl, {
    cache: "no-store",
    headers: {
      "user-agent":
        "BeInTheKnow legal education research bot; contact: project owner",
    },
  });

  if (!response.ok) {
    throw new Error(
      `NICCC detail fetch failed: ${response.status} ${response.statusText}`,
    );
  }

  const html = await response.text();
  const citationMatch = html.match(
    /<span id="citation">\s*<a href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/i,
  );
  const title = htmlToText(html.match(/<h2>([\s\S]*?)<\/h2>/i)?.[1] ?? result.title);
  const citation = htmlToText(citationMatch?.[2] ?? result.citation).replace(/\s*»$/, "");
  const currentThrough = extractSectionText(html, "Current Through").replace(
    /^Current Through\s*/i,
    "",
  );
  const metadataStart = html.indexOf('<div id="consequence_metadata">');
  const metadataHtml =
    metadataStart >= 0 ? html.slice(metadataStart, html.indexOf("<p id=\"disclaimer\"", metadataStart)) : html;

  return {
    title,
    citation,
    citationUrl: citationMatch?.[1],
    currentThrough,
    text: htmlToText(metadataHtml).slice(0, MAX_DETAIL_TEXT_LENGTH),
  };
}

export async function ingestNicccConsequences({
  topic,
  stateCode,
  offset = 0,
  limit = 10,
  maxPagesPerState = 8,
}: IngestNicccOptions): Promise<IngestNicccResult> {
  const config = topicConfig[topic];
  const jurisdictionIds = await getJurisdictionIds();
  const normalizedStateCode = stateCode?.toUpperCase();
  const selectedStates = states
    .filter((state) => (normalizedStateCode ? state.code === normalizedStateCode : true))
    .slice(offset, offset + limit);
  let searchedPages = 0;
  let resultsFound = 0;
  let detailsFetched = 0;
  let upsertedCandidates = 0;
  let skippedResults = 0;
  let failedResults = 0;

  for (const state of selectedStates) {
    const jurisdictionId = jurisdictionIds.get(state.code);
    if (!jurisdictionId) {
      failedResults += 1;
      continue;
    }

    for (let page = 0; page < maxPagesPerState; page += 1) {
      const html = await searchNicccPage({
        jurisdictionId,
        consequenceIds: config.consequenceIds,
        page,
      });
      searchedPages += 1;

      const results = parseResultRows(html);
      resultsFound += results.length;

      for (const result of results) {
        try {
          const detail = await fetchNicccDetail(result);
          detailsFetched += 1;

          if (!detail.text) {
            skippedResults += 1;
            continue;
          }

          const fetchedAt = new Date();
          const candidateKey = hashKey([
            "curated-summary",
            config.sourceId,
            topic,
            state.code,
            result.detailId,
          ]);

          await LegalAuthorityCandidateModel.updateOne(
            { candidateKey },
            {
              $set: {
                candidateType: "curated-summary",
                jurisdiction: "state",
                stateCode: state.code,
                topicId: topic,
                sourceId: config.sourceId,
                sourceName: NICCC_SOURCE_NAME,
                sourceUrl: result.detailUrl,
                searchTerms: config.searchTerms,
                citation: detail.citation,
                normalizedCitation: detail.citation.toLowerCase(),
                titleHint: detail.title,
                occurrenceCount: 1,
                status: "needs-review",
                sourceFetchedAt: fetchedAt,
                currentAsOf: fetchedAt,
                currentAsOfLabel: detail.currentThrough,
                notes:
                  "NICCC collateral consequence detail. Use as a citation-backed consequence index; verify cited law against official state sources before promotion to LegalAuthority.",
                snippets: [
                  {
                    sourceType: "curated-source",
                    sourceId: config.sourceId,
                    sourceUrl: detail.citationUrl ?? result.detailUrl,
                    text: detail.text,
                  },
                ],
              },
            },
            { upsert: true },
          );
          upsertedCandidates += 1;
        } catch {
          failedResults += 1;
        }
      }

      if (!hasNextPage(html)) break;
    }
  }

  return {
    topic,
    scannedStates: selectedStates.length,
    searchedPages,
    resultsFound,
    detailsFetched,
    upsertedCandidates,
    skippedResults,
    failedResults,
  };
}

export async function ingestNicccExport({
  topic,
  stateCode,
  offset = 0,
  limit = 10,
}: IngestNicccOptions): Promise<IngestNicccExportResult> {
  const config = topicConfig[topic];
  const jurisdictionIds = await getJurisdictionIds();
  const normalizedStateCode = stateCode?.toUpperCase();
  const selectedStates = states
    .filter((state) => (normalizedStateCode ? state.code === normalizedStateCode : true))
    .slice(offset, offset + limit);
  let rowsFound = 0;
  let upsertedCandidates = 0;
  let skippedRows = 0;
  let failedRows = 0;

  for (const state of selectedStates) {
    const jurisdictionId = jurisdictionIds.get(state.code);
    if (!jurisdictionId) {
      failedRows += 1;
      continue;
    }

    const csv = await exportNicccCsv({
      jurisdictionId,
      consequenceIds: config.consequenceIds,
    });
    const rows = parseCsv(csv);
    rowsFound += rows.length;

    for (const row of rows) {
      const citation = row["Citation"]?.trim();
      const title = row["Title"]?.trim();

      if (!citation || !title) {
        skippedRows += 1;
        continue;
      }

      try {
        const fetchedAt = new Date();
        const citationUrl = row["Citation URL"]?.trim();
        const currentThrough = row["Current Through"]?.trim();
        const candidateKey = hashKey([
          "curated-summary",
          `${config.sourceId}-export`,
          topic,
          state.code,
          citation.toLowerCase(),
          title.toLowerCase(),
        ]);
        const text = [
          `Title: ${title}`,
          `Citation: ${citation}`,
          citationUrl ? `Citation URL: ${citationUrl}` : "",
          row["Relevant Subsections"]
            ? `Relevant Subsections: ${row["Relevant Subsections"]}`
            : "",
          row["Related Statutes"]
            ? `Related Statutes: ${row["Related Statutes"]}`
            : "",
          row["Notes"] ? `Notes: ${row["Notes"]}` : "",
          currentThrough ? `Current Through: ${currentThrough}` : "",
          row["Consequences"] ? `Consequences: ${row["Consequences"]}` : "",
          row["Keywords"] ? `Keywords: ${row["Keywords"]}` : "",
          row["Offense Type"] ? `Offense Type: ${row["Offense Type"]}` : "",
          row["Discretion"] ? `Discretion: ${row["Discretion"]}` : "",
          row["Duration"] ? `Duration: ${row["Duration"]}` : "",
        ]
          .filter(Boolean)
          .join("\n");

        await LegalAuthorityCandidateModel.updateOne(
          { candidateKey },
          {
            $set: {
              candidateType: "curated-summary",
              jurisdiction: "state",
              stateCode: state.code,
              topicId: topic,
              sourceId: config.sourceId,
              sourceName: NICCC_SOURCE_NAME,
              sourceUrl: NICCC_CONSEQUENCES_URL,
              searchTerms: config.searchTerms,
              citation,
              normalizedCitation: citation.toLowerCase(),
              titleHint: title,
              occurrenceCount: Number(row["Number of Consequences"] ?? "1") || 1,
              status: "needs-review",
              sourceFetchedAt: fetchedAt,
              currentAsOf: fetchedAt,
              currentAsOfLabel: currentThrough,
              notes:
                "NICCC CSV export row. Use as a citation-backed consequence index; verify cited law against official state sources before promotion to LegalAuthority.",
              snippets: [
                {
                  sourceType: "curated-source",
                  sourceId: config.sourceId,
                  sourceUrl: citationUrl || NICCC_CONSEQUENCES_URL,
                  text: text.slice(0, MAX_DETAIL_TEXT_LENGTH),
                },
              ],
            },
          },
          { upsert: true },
        );
        upsertedCandidates += 1;
      } catch {
        failedRows += 1;
      }
    }
  }

  return {
    topic,
    scannedStates: selectedStates.length,
    rowsFound,
    upsertedCandidates,
    skippedRows,
    failedRows,
  };
}
