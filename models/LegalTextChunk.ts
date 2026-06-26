import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const legalTextChunkSchema = new Schema(
  {
    sourceType: {
      type: String,
      enum: ["legiscan-bill-text", "legal-authority", "legal-content"],
      required: true,
      index: true,
    },
    sourceId: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    sourceHash: {
      type: String,
      trim: true,
      index: true,
    },
    chunkIndex: {
      type: Number,
      required: true,
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
      trim: true,
    },
    sourceUrl: {
      type: String,
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
    currentAsOf: {
      type: Date,
      index: true,
    },
    currentAsOfLabel: {
      type: String,
      trim: true,
    },
    chunkText: {
      type: String,
      required: true,
    },
    tokenEstimate: {
      type: Number,
    },
    embedding: {
      type: [Number],
      default: [],
    },
    embeddingModel: {
      type: String,
      trim: true,
    },
    embeddedAt: {
      type: Date,
    },
    reviewStatus: {
      type: String,
      enum: ["draft", "legal-review", "approved", "expired"],
      default: "draft",
      required: true,
      index: true,
    },
  },
  { timestamps: true },
);

legalTextChunkSchema.index({ sourceType: 1, sourceId: 1, chunkIndex: 1 }, { unique: true });
legalTextChunkSchema.index({ jurisdiction: 1, stateCode: 1, topicIds: 1, reviewStatus: 1 });

export type LegalTextChunk = InferSchemaType<typeof legalTextChunkSchema>;

export const LegalTextChunkModel =
  (mongoose.models.LegalTextChunk as Model<LegalTextChunk> | undefined) ??
  mongoose.model<LegalTextChunk>("LegalTextChunk", legalTextChunkSchema);
