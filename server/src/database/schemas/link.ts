import mongoose from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";
import ILink from "../interfaces/link";

const Schema = mongoose.Schema;

const linkSchema = new Schema<ILink>(
  {
    title: { type: String, required: true, trim: true },
    uri: { type: String, required: true, trim: true },
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

linkSchema.index({ created_at: -1 });

linkSchema.plugin(mongooseLeanVirtuals);

export default linkSchema;
