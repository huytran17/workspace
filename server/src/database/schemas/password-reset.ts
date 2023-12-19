import mongoose, { Model } from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";
import IPasswordReset from "../interfaces/password-reset";

const Schema = mongoose.Schema;

const passwordResetSchema = new Schema<IPasswordReset, Model<IPasswordReset>>(
  {
    email: { type: String, required: true },
    code: { type: Number, required: true },
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
