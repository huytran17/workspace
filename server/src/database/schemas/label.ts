import mongoose from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";
import ILabel from "../interfaces/label";

const Schema = mongoose.Schema;

const labelSchema = new Schema<ILabel>(
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

labelSchema.index({ created_at: -1 });

labelSchema.plugin(mongooseLeanVirtuals);

export default labelSchema;
