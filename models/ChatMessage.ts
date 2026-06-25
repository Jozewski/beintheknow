import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const chatMessageSchema = new Schema(
  {
    sessionId: {
      type: Schema.Types.ObjectId,
      ref: "ChatSession",
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "assistant"],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    citations: {
      type: [Schema.Types.Mixed],
      default: [],
    },
    confidence: {
      type: String,
      enum: ["high", "medium", "low"],
      required: true,
    },
    flagged: {
      type: Boolean,
      default: false,
    },
    responseTimeMs: {
      type: Number,
    },
  },
  { timestamps: true },
);

export type ChatMessage = InferSchemaType<typeof chatMessageSchema>;

export const ChatMessageModel =
  (mongoose.models.ChatMessage as Model<ChatMessage> | undefined) ??
  mongoose.model<ChatMessage>("ChatMessage", chatMessageSchema);
