import mongoose, { Model } from "mongoose";
import IPhoto from "../interfaces/photo";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";

const Schema = mongoose.Schema;

const photoSchema = new Schema<IPhoto, Model<IPhoto>>({
  location: { type: String, required: true, trim: true },
  key: { type: String, required: true, trim: true },
  bucket: { type: String, required: true, trim: true },
  created_at: { type: Date, default: null },
});

photoSchema.plugin(mongooseLeanVirtuals);

photoSchema.index({ created_at: -1 });

export default photoSchema;
