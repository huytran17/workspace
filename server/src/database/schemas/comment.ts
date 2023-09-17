import mongoose from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: { type: String, required: true, trim: true },
  task: { type: Object, required: true, trim: true },
  created_by: { type: Object, required: true, trim: true },
  created_at: { type: Date, default: new Date() },
  updated_at: { type: Date, default: null },
  deleted_at: { type: Date, default: null },
});

commentSchema.index({ created_at: -1 });

commentSchema.plugin(mongooseLeanVirtuals);

export default commentSchema;
