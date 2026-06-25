import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const chatSessionSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    guestToken: {
      type: String,
      trim: true,
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
  },
  { timestamps: true },
);

export type ChatSession = InferSchemaType<typeof chatSessionSchema>;

export const ChatSessionModel =
  (mongoose.models.ChatSession as Model<ChatSession> | undefined) ??
  mongoose.model<ChatSession>("ChatSession", chatSessionSchema);
