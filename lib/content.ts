import { connectDB } from "@/lib/mongodb";
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

function serializeDate(date?: Date) {
  return date?.toISOString();
}

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export async function getApprovedContent({
  jurisdiction,
  stateCode,
  q,
}: ApprovedContentQuery): Promise<ApprovedContentEntry[]> {
  await connectDB();

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

  return rows.map((row) => ({
    id: String(row._id),
    topicId: row.topicId,
    jurisdiction: row.jurisdiction,
    stateCode: row.stateCode,
    summary: row.summary,
    resources: row.resources ?? [],
    sourceBillIds: row.sourceBillIds ?? [],
    sourceAttribution: row.sourceAttribution,
    sourceUpdatedAt: serializeDate(row.sourceUpdatedAt),
    reviewedAt: serializeDate(row.reviewedAt),
    expiresAt: serializeDate(row.expiresAt),
  }));
}
