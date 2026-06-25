import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    plan: {
      type: String,
      enum: ["guest", "registered"],
      default: "guest",
      required: true,
    },
    preferredLanguage: {
      type: String,
      default: "en",
      trim: true,
    },
    statePreference: {
      type: String,
      trim: true,
      uppercase: true,
    },
    jurisdictionPreference: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);

export type User = InferSchemaType<typeof userSchema>;

export const UserModel =
  (mongoose.models.User as Model<User> | undefined) ??
  mongoose.model<User>("User", userSchema);
