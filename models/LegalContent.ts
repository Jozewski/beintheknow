import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const resourceSchema = new Schema(
  {
    label: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false },
);

const legalContentSchema = new Schema(
  {
    topicId: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    jurisdiction: {
      type: String,
      enum: ["federal", "state"],
      required: true,
    },
    stateCode: {
      type: String,
      trim: true,
      uppercase: true,
    },
    summary: {
      type: String,
      required: true,
    },
    resources: {
      type: [resourceSchema],
      default: [],
    },
    reviewStatus: {
      type: String,
      enum: ["draft", "legal-review", "approved", "expired"],
      default: "draft",
      required: true,
    },
    reviewedAt: {
      type: Date,
    },
    reviewedBy: {
      type: String,
      trim: true,
    },
    expiresAt: {
      type: Date,
    },
    embedding: {
      type: [Number],
      default: [],
    },
    reviewHistory: {
      type: [Schema.Types.Mixed],
      default: [],
    },
  },
  { timestamps: true },
);

export type LegalContent = InferSchemaType<typeof legalContentSchema>;

export const LegalContentModel =
  (mongoose.models.LegalContent as Model<LegalContent> | undefined) ??
  mongoose.model<LegalContent>("LegalContent", legalContentSchema);
