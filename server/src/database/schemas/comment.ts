import mongoose from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";
import IComment from "../interfaces/comment";

const Schema = mongoose.Schema;

const commentSchema = new Schema<IComment>({
  content: { type: String, required: true, trim: true },
  task: { type: Schema.Types.ObjectId, required: true, trim: true },
  created_by: { type: Schema.Types.ObjectId, required: true, trim: true },
  created_at: { type: Date, default: new Date() },
  updated_at: { type: Date, default: null },
  deleted_at: { type: Date, default: null },
});

commentSchema.index({ created_at: -1 });

commentSchema.plugin(mongooseLeanVirtuals);

export default commentSchema;
