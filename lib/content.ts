import { stateTopicResourceEntries } from "@/data/state-topic-resources";
import { connectDB } from "@/lib/mongodb";
import { LegalAuthorityModel } from "@/models/LegalAuthority";
import { LegalContentModel } from "@/models/LegalContent";

export type ContentJurisdiction = "federal" | "state";

export type ContentResource = {
  label: string;
  url: string;
};

export type ApprovedContentEntry = {
  id: string;
  topicId: string;
  jurisdiction: ContentJurisdiction;
  stateCode?: string;
  summary: string;
  resources: ContentResource[];
  sourceBillIds: number[];
  sourceAttribution?: string;
  sourceUpdatedAt?: string;
  reviewedAt?: string;
  expiresAt?: string;
};

export type ApprovedContentQuery = {
  jurisdiction: ContentJurisdiction;
  stateCode?: string;
  q?: string;
};

type LegalContentLean = {
  _id: unknown;
  topicId: string;
  jurisdiction: ContentJurisdiction;
  stateCode?: string;
  summary: string;
  resources?: ContentResource[];
  sourceBillIds?: number[];
  sourceAttribution?: string;
  sourceUpdatedAt?: Date;
  reviewedAt?: Date;
  expiresAt?: Date;
};

type LegalAuthorityResourceLean = {
  topicIds?: string[];
  citation?: string;
  title?: string;
  officialUrl: string;
  sourceName?: string;
};

const topicSummaries: Record<string, string> = {
  voting:
    "State-specific voting rights information from official law sources, including rules that may affect people with criminal convictions.",
  expungement:
    "State-specific record-clearing information from official law sources, including expungement, sealing, set-aside, or related relief.",
  housing:
    "State-specific housing information from official law sources, including tenant screening, landlord duties, and related record-clearing rules.",
  employment:
    "State-specific employment information from official law sources, including hiring, licensing, and record-related protections.",
  police:
    "State-specific police interaction information from official law sources, including recording, identification, stop, or arrest-related rules.",
  supervision:
    "State-specific supervision information from official law sources, including probation, parole, community supervision, and violation rules.",
};

const topicOrder = [
  "voting",
  "expungement",
  "housing",
  "employment",
  "police",
  "supervision",
];

function serializeDate(date?: Date) {
  return date?.toISOString();
}

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function addResource(resources: ContentResource[], resource: ContentResource) {
  if (!resource.url || resources.some((item) => item.url === resource.url)) return;
  resources.push(resource);
}

function cleanLegacyText(value: string) {
  return value
    .replaceAll("\u00e2\u0080\u0094", "-")
    .replaceAll("\u00e2\u0080\u0093", "-")
    .replaceAll("\u00e2\u0080\u0099", "'")
    .replaceAll("\u00e2\u0080\u009c", '"')
    .replaceAll("\u00e2\u0080\u009d", '"')
    .replaceAll("â€”", "-")
    .replaceAll("â€“", "-")
    .replaceAll("â€™", "'")
    .replaceAll("â€œ", '"')
    .replaceAll("â€", '"')
    .replaceAll("Â§", "sec.")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeLegacyTopicId(topicId: string) {
  if (topicId === "parole" || topicId === "probation") return "supervision";
  return topicId;
}

function getStateTopicResourcesByTopic({
  jurisdiction,
  stateCode,
}: Pick<ApprovedContentQuery, "jurisdiction" | "stateCode">) {
  const resourcesByTopic = new Map<string, ContentResource[]>();

  for (const entry of stateTopicResourceEntries) {
    if (entry.jurisdiction !== jurisdiction) continue;
    if (jurisdiction === "state" && entry.stateCode !== stateCode?.toUpperCase()) {
      continue;
    }
    if (jurisdiction === "federal" && entry.stateCode) continue;

    const topicId = normalizeLegacyTopicId(entry.topicId);
    const resources = resourcesByTopic.get(topicId) ?? [];

    for (const resource of entry.resources ?? []) {
      addResource(resources, {
        label: cleanLegacyText(resource.label),
        url: resource.url,
      });
    }

    if (entry.learnMoreUrl) {
      addResource(resources, {
        label: "Learn more",
        url: entry.learnMoreUrl,
      });
    }

    resourcesByTopic.set(topicId, resources.slice(0, 6));
  }

  return resourcesByTopic;
}

async function getAuthorityResourcesByTopic({
  jurisdiction,
  stateCode,
}: Pick<ApprovedContentQuery, "jurisdiction" | "stateCode">) {
  const filter: Record<string, unknown> = {
    jurisdiction,
    reviewStatus: "approved",
    sourceRole: "primary-official-law",
  };

  if (jurisdiction === "state") {
    if (!stateCode) return new Map<string, ContentResource[]>();
    filter.stateCode = stateCode.toUpperCase();
  } else {
    filter.$or = [{ stateCode: { $exists: false } }, { stateCode: "" }, { stateCode: null }];
  }

  const authorities = await LegalAuthorityModel.find(filter)
    .sort({ citation: 1, title: 1 })
    .select("topicIds citation title officialUrl sourceName")
    .lean<LegalAuthorityResourceLean[]>()
    .exec();

  const resourcesByTopic = new Map<string, ContentResource[]>();

  for (const authority of authorities) {
    const topics = authority.topicIds ?? [];
    for (const topicId of topics) {
      const resources = resourcesByTopic.get(topicId) ?? [];
      addResource(resources, {
        label: authority.citation ?? authority.title ?? authority.sourceName ?? "Official source",
        url: authority.officialUrl,
      });
      resourcesByTopic.set(topicId, resources.slice(0, 5));
    }
  }

  return resourcesByTopic;
}

export async function getApprovedContent({
  jurisdiction,
  stateCode,
  q,
}: ApprovedContentQuery): Promise<ApprovedContentEntry[]> {
  await connectDB();
  const [authorityResourcesByTopic, legacyResourcesByTopic] = await Promise.all([
    getAuthorityResourcesByTopic({
      jurisdiction,
      stateCode,
    }),
    Promise.resolve(getStateTopicResourcesByTopic({ jurisdiction, stateCode })),
  ]);

  const now = new Date();
  const filter: Record<string, unknown> = {
    jurisdiction,
    reviewStatus: "approved",
    $or: [{ expiresAt: { $exists: false } }, { expiresAt: null }, { expiresAt: { $gt: now } }],
  };

  if (jurisdiction === "state") {
    if (stateCode) {
      filter.stateCode = stateCode.toUpperCase();
    }
  } else {
    filter.$and = [{ $or: [{ stateCode: { $exists: false } }, { stateCode: "" }, { stateCode: null }] }];
  }

  const normalizedQuery = q?.trim();

  if (normalizedQuery) {
    const searchRegex = new RegExp(escapeRegex(normalizedQuery), "i");
    const queryConditions = [
      { topicId: searchRegex },
      { summary: searchRegex },
      { "resources.label": searchRegex },
    ];

    if (Array.isArray(filter.$and)) {
      filter.$and.push({ $or: queryConditions });
    } else {
      filter.$and = [{ $or: queryConditions }];
    }
  }

  const rows = await LegalContentModel.find(filter)
    .sort({ topicId: 1, stateCode: 1, reviewedAt: -1 })
    .lean<LegalContentLean[]>()
    .exec();

  const entries: ApprovedContentEntry[] = rows.map((row) => {
    const resources = [...(row.resources ?? [])];
    for (const resource of authorityResourcesByTopic.get(row.topicId) ?? []) {
      addResource(resources, resource);
    }
    for (const resource of legacyResourcesByTopic.get(row.topicId) ?? []) {
      addResource(resources, resource);
    }

    return {
      id: String(row._id),
      topicId: row.topicId,
      jurisdiction: row.jurisdiction,
      stateCode: row.stateCode,
      summary: row.summary,
      resources,
      sourceBillIds: row.sourceBillIds ?? [],
      sourceAttribution: row.sourceAttribution,
      sourceUpdatedAt: serializeDate(row.sourceUpdatedAt),
      reviewedAt: serializeDate(row.reviewedAt),
      expiresAt: serializeDate(row.expiresAt),
    };
  });

  if (jurisdiction === "state" && stateCode) {
    const existingTopicIds = new Set(entries.map((entry) => entry.topicId));

    for (const topicId of topicOrder) {
      const resources = authorityResourcesByTopic.get(topicId) ?? [];
      const legacyResources = legacyResourcesByTopic.get(topicId) ?? [];
      const mergedResources = [...resources];
      for (const resource of legacyResources) {
        addResource(mergedResources, resource);
      }

      if (existingTopicIds.has(topicId) || mergedResources.length === 0) continue;

      entries.push({
        id: `authority:${stateCode.toUpperCase()}:${topicId}`,
        topicId,
        jurisdiction,
        stateCode: stateCode.toUpperCase(),
        summary: topicSummaries[topicId],
        resources: mergedResources,
        sourceBillIds: [],
        sourceAttribution: "Official state legal authority records.",
        sourceUpdatedAt: undefined,
        reviewedAt: undefined,
        expiresAt: undefined,
      });
    }
  }

  return entries.sort(
    (left, right) =>
      topicOrder.indexOf(left.topicId) - topicOrder.indexOf(right.topicId) ||
      left.topicId.localeCompare(right.topicId),
  );
}
