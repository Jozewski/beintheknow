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
    // User feedback on assistant answers ("was this helpful?"). Minimal by
    // design: a rating plus an optional short comment - no extra identity.
    feedback: {
      type: new Schema(
        {
          rating: {
            type: String,
            enum: ["up", "down"],
            required: true,
          },
          comment: {
            type: String,
            trim: true,
            maxlength: 500,
          },
          createdAt: {
            type: Date,
            default: Date.now,
          },
        },
        { _id: false },
      ),
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
