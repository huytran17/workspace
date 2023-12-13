import mongoose from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";
import IStatus from "../interfaces/status";

const Schema = mongoose.Schema;

const statusSchema = new Schema<IStatus>(
  {
    title: { type: String, required: true, trim: true },
    color: { type: String, required: true, trim: true },
    created_at: { type: Date, default: new Date() },
    updated_at: { type: Date, default: null },
    deleted_at: { type: Date, default: null },
  },
  {
    toJSON: { virtuals: true },
  }
);

statusSchema.index({ created_at: -1 });

statusSchema.plugin(mongooseLeanVirtuals);

export default statusSchema;
