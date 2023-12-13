import mongoose from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";

const Schema = mongoose.Schema;

const passwordResetSchema = new Schema(
  {
    email: { type: String, required: true },
    code: { type: Number, required: true },
    created_at: { type: Date, default: new Date() },
    updated_at: { type: Date, default: null },
    expires_at: { type: Date, default: null },
  },
  {
    toJSON: { virtuals: true },
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

passwordResetSchema.plugin(mongooseLeanVirtuals);

passwordResetSchema.index({ created_at: -1 });

export default passwordResetSchema;
