import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const legalAuthoritySchema = new Schema(
  {
    sourceId: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    authorityType: {
      type: String,
      enum: ["statute", "regulation", "agency-guidance", "enacted-bill"],
      required: true,
      index: true,
    },
    jurisdiction: {
      type: String,
      enum: ["federal", "state"],
      required: true,
      index: true,
    },
    stateCode: {
      type: String,
      trim: true,
      uppercase: true,
      index: true,
    },
    topicIds: {
      type: [String],
      default: [],
      index: true,
    },
    citation: {
      type: String,
      trim: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    officialUrl: {
      type: String,
      required: true,
      trim: true,
    },
    sourceName: {
      type: String,
      trim: true,
    },
    sourceRole: {
      type: String,
      enum: [
        "primary-curated-index",
        "primary-official-law",
        "cross-check",
        "federal-layer",
        "practical-guidance",
        "agency-policy",
      ],
    },
    text: {
      type: String,
      required: true,
    },
    normalizedText: {
      type: String,
      required: true,
    },
    effectiveDate: {
      type: Date,
    },
    sourceBillIds: {
      type: [Number],
      default: [],
      index: true,
    },
    reviewStatus: {
      type: String,
      enum: ["draft", "legal-review", "approved", "expired"],
      default: "draft",
      required: true,
      index: true,
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
    sourceHash: {
      type: String,
      trim: true,
      index: true,
    },
  },
  { timestamps: true },
);

legalAuthoritySchema.index({ jurisdiction: 1, stateCode: 1, topicIds: 1 });
legalAuthoritySchema.index({ jurisdiction: 1, citation: 1 });

export type LegalAuthority = InferSchemaType<typeof legalAuthoritySchema>;

export const LegalAuthorityModel =
  (mongoose.models.LegalAuthority as Model<LegalAuthority> | undefined) ??
  mongoose.model<LegalAuthority>("LegalAuthority", legalAuthoritySchema);
