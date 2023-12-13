import mongoose from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";
import ILink from "../interfaces/link";

const Schema = mongoose.Schema;

const linkSchema = new Schema<ILink>(
  {
    title: { type: String, required: true, trim: true },
    uri: { type: String, required: true, trim: true },
    created_at: { type: Date, default: new Date() },
    updated_at: { type: Date, default: null },
    deleted_at: { type: Date, default: null },
  },
  {
    toJSON: { virtuals: true },
  }
);

linkSchema.index({ created_at: -1 });

linkSchema.plugin(mongooseLeanVirtuals);

export default linkSchema;
