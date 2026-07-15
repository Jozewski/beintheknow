import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const passwordResetTokenSchema = new Schema(
  {
    // SHA-256 hash of the emailed token - never the token itself.
    tokenHash: {
      type: String,
      required: true,
      unique: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    // Peppered IP hash of the requester (never a raw IP) for rate limiting.
    requestIpHash: {
      type: String,
      index: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
    usedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true },
);

// Mongo deletes documents an hour AFTER expiry, not at expiry: the lookup
// query already refuses expired tokens, and keeping them briefly lets the
// forgot endpoint count recent requests for rate limiting.
passwordResetTokenSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 3600 });

export type PasswordResetToken = InferSchemaType<typeof passwordResetTokenSchema>;

export const PasswordResetTokenModel =
  (mongoose.models.PasswordResetToken as Model<PasswordResetToken> | undefined) ??
  mongoose.model<PasswordResetToken>("PasswordResetToken", passwordResetTokenSchema);
