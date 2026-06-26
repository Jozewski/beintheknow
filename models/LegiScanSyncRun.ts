import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const syncRunQuerySchema = new Schema(
  {
    topicId: {
      type: String,
      required: true,
      trim: true,
    },
    stateCode: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },
    query: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false },
);

const legiScanSyncRunSchema = new Schema(
  {
    trigger: {
      type: String,
      enum: ["cron", "manual"],
      required: true,
      index: true,
    },
    status: {
      type: String,
      enum: ["planned", "running", "succeeded", "failed"],
      default: "planned",
      required: true,
      index: true,
    },
    schedule: {
      type: String,
      trim: true,
    },
    startedAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
    finishedAt: {
      type: Date,
    },
    plannedSearchQueryCount: {
      type: Number,
      default: 0,
      required: true,
    },
    plannedSearchQueries: {
      type: [syncRunQuerySchema],
      default: [],
    },
    counts: {
      searchQueries: {
        type: Number,
        default: 0,
      },
      billFetches: {
        type: Number,
        default: 0,
      },
      billTextFetches: {
        type: Number,
        default: 0,
      },
      newBills: {
        type: Number,
        default: 0,
      },
      changedBills: {
        type: Number,
        default: 0,
      },
      unchangedBills: {
        type: Number,
        default: 0,
      },
      relevantBills: {
        type: Number,
        default: 0,
      },
      irrelevantBills: {
        type: Number,
        default: 0,
      },
    },
    error: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);

legiScanSyncRunSchema.index({ startedAt: -1 });

export type LegiScanSyncRun = InferSchemaType<typeof legiScanSyncRunSchema>;

export const LegiScanSyncRunModel =
  (mongoose.models.LegiScanSyncRun as Model<LegiScanSyncRun> | undefined) ??
  mongoose.model<LegiScanSyncRun>("LegiScanSyncRun", legiScanSyncRunSchema);
