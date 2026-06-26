import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const candidateSnippetSchema = new Schema(
  {
    sourceType: {
      type: String,
      enum: [
        "legiscan-bill-text",
        "official-source",
        "curated-source",
        "manual-curation",
      ],
      required: true,
    },
    sourceId: {
      type: String,
      required: true,
      trim: true,
    },
    sourceUrl: {
      type: String,
      trim: true,
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false },
);

const legalAuthorityCandidateSchema = new Schema(
  {
    candidateKey: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    candidateType: {
      type: String,
      enum: [
        "official-search-target",
        "curated-source-target",
        "manual-curation-target",
        "curated-summary",
        "statute-citation",
      ],
      required: true,
      index: true,
    },
    jurisdiction: {
      type: String,
      enum: ["state", "federal"],
      required: true,
      index: true,
    },
    stateCode: {
      type: String,
      trim: true,
      uppercase: true,
      index: true,
    },
    topicId: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    sourceId: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    sourceName: {
      type: String,
      required: true,
      trim: true,
    },
    sourceUrl: {
      type: String,
      required: true,
      trim: true,
    },
    searchTerms: {
      type: [String],
      default: [],
    },
    citation: {
      type: String,
      trim: true,
      index: true,
    },
    normalizedCitation: {
      type: String,
      trim: true,
      index: true,
    },
    titleHint: {
      type: String,
      trim: true,
    },
    occurrenceCount: {
      type: Number,
      default: 0,
    },
    snippets: {
      type: [candidateSnippetSchema],
      default: [],
    },
    sourceFetchedAt: {
      type: Date,
    },
    currentAsOf: {
      type: Date,
      index: true,
    },
    currentAsOfLabel: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: [
        "needs-adapter",
        "needs-review",
        "verified",
        "rejected",
        "superseded",
      ],
      default: "needs-review",
      required: true,
      index: true,
    },
    verifiedAuthorityId: {
      type: Schema.Types.ObjectId,
      ref: "LegalAuthority",
    },
    notes: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);

legalAuthorityCandidateSchema.index({
  jurisdiction: 1,
  stateCode: 1,
  topicId: 1,
  status: 1,
});
legalAuthorityCandidateSchema.index({
  stateCode: 1,
  normalizedCitation: 1,
  topicId: 1,
});

export type LegalAuthorityCandidate = InferSchemaType<
  typeof legalAuthorityCandidateSchema
>;

export const LegalAuthorityCandidateModel =
  (mongoose.models.LegalAuthorityCandidate as
    | Model<LegalAuthorityCandidate>
    | undefined) ??
  mongoose.model<LegalAuthorityCandidate>(
    "LegalAuthorityCandidate",
    legalAuthorityCandidateSchema,
  );
