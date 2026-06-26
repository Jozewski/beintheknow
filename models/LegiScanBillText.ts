import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const altTextSchema = new Schema(
  {
    mime: {
      type: String,
      trim: true,
    },
    mimeId: {
      type: Number,
    },
    stateLink: {
      type: String,
      trim: true,
    },
    textSize: {
      type: Number,
    },
    textHash: {
      type: String,
      trim: true,
      index: true,
    },
  },
  { _id: false },
);

const legiScanBillTextSchema = new Schema(
  {
    docId: {
      type: Number,
      required: true,
      unique: true,
      index: true,
    },
    billId: {
      type: Number,
      required: true,
      index: true,
    },
    stateCode: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
      index: true,
    },
    billNumber: {
      type: String,
      trim: true,
      index: true,
    },
    topicIds: {
      type: [String],
      default: [],
      index: true,
    },
    docDate: {
      type: Date,
    },
    type: {
      type: String,
      trim: true,
    },
    typeId: {
      type: Number,
    },
    mime: {
      type: String,
      trim: true,
    },
    mimeId: {
      type: Number,
    },
    url: {
      type: String,
      trim: true,
    },
    stateLink: {
      type: String,
      trim: true,
    },
    textSize: {
      type: Number,
    },
    textHash: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    rawText: {
      type: String,
      required: true,
    },
    normalizedText: {
      type: String,
      default: "",
    },
    contentEncoding: {
      type: String,
      enum: ["utf8", "external"],
      default: "utf8",
      required: true,
    },
    textExtractionStatus: {
      type: String,
      enum: ["extracted", "pending", "failed"],
      default: "extracted",
      required: true,
      index: true,
    },
    textExtractionError: {
      type: String,
      trim: true,
    },
    altText: {
      type: altTextSchema,
    },
    sourceAttribution: {
      type: String,
      default:
        "Legislative data provided by LegiScan under Creative Commons Attribution 4.0.",
      trim: true,
    },
    statuteCitationExtractedAt: {
      type: Date,
    },
    statuteCitationExtractionVersion: {
      type: Number,
      index: true,
    },
    fetchedAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  { timestamps: true },
);

legiScanBillTextSchema.index({ stateCode: 1, billId: 1 });
legiScanBillTextSchema.index({ stateCode: 1, topicIds: 1 });

export type LegiScanBillText = InferSchemaType<typeof legiScanBillTextSchema>;

export const LegiScanBillTextModel =
  (mongoose.models.LegiScanBillText as Model<LegiScanBillText> | undefined) ??
  mongoose.model<LegiScanBillText>("LegiScanBillText", legiScanBillTextSchema);
