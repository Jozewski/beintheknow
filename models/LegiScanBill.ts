import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const topicMatchSchema = new Schema(
  {
    topicId: {
      type: String,
      enum: [
        "voting",
        "expungement",
        "housing",
        "employment",
        "police",
        "supervision",
      ],
      required: true,
    },
    queries: {
      type: [String],
      default: [],
    },
    relevanceStatus: {
      type: String,
      enum: ["pending", "relevant", "irrelevant"],
      default: "pending",
      required: true,
    },
    relevanceCheckedAt: {
      type: Date,
    },
    relevanceReason: {
      type: String,
      trim: true,
    },
  },
  { _id: false },
);

const billTextSchema = new Schema(
  {
    docId: {
      type: Number,
      required: true,
    },
    mime: {
      type: String,
      trim: true,
    },
    url: {
      type: String,
      trim: true,
    },
    textHash: {
      type: String,
      trim: true,
    },
    fetchedAt: {
      type: Date,
    },
  },
  { _id: false },
);

const legiScanBillSchema = new Schema(
  {
    billId: {
      type: Number,
      required: true,
      unique: true,
      index: true,
    },
    changeHash: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    stateCode: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
      index: true,
    },
    sessionId: {
      type: Number,
      index: true,
    },
    billNumber: {
      type: String,
      trim: true,
      index: true,
    },
    title: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: Number,
      index: true,
    },
    statusDate: {
      type: Date,
    },
    url: {
      type: String,
      trim: true,
    },
    stateLink: {
      type: String,
      trim: true,
    },
    topicMatches: {
      type: [topicMatchSchema],
      default: [],
    },
    texts: {
      type: [billTextSchema],
      default: [],
    },
    rawSearchResult: {
      type: Schema.Types.Mixed,
    },
    rawBill: {
      type: Schema.Types.Mixed,
    },
    firstSeenAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
    lastSeenAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
    lastFetchedAt: {
      type: Date,
    },
  },
  { timestamps: true },
);

legiScanBillSchema.index({ stateCode: 1, "topicMatches.topicId": 1 });
legiScanBillSchema.index({ billId: 1, changeHash: 1 });

export type LegiScanBill = InferSchemaType<typeof legiScanBillSchema>;

export const LegiScanBillModel =
  (mongoose.models.LegiScanBill as Model<LegiScanBill> | undefined) ??
  mongoose.model<LegiScanBill>("LegiScanBill", legiScanBillSchema);
