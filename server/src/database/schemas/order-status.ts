import mongoose, { Model } from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";
import IStatus, { StatusType } from "../interfaces/order-status";

const Schema = mongoose.Schema;

const statusSchema = new Schema<IStatus, Model<IStatus>>(
  {
    type: { type: String, required: true, trim: true, enum: StatusType },
    color: { type: String, required: true, trim: true },
    deleted_at: { type: Date, default: null },
  },
  {
    toJSON: { virtuals: true },
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

statusSchema.index({ created_at: -1 });

statusSchema.plugin(mongooseLeanVirtuals);

export default statusSchema;
