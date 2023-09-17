import mongoose from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";
import ITask from "../interfaces/task";

const Schema = mongoose.Schema;

const taskSchema = new Schema<ITask>({
  title: { type: String, required: true, trim: true },
  content: { type: String, trim: true, default: "" },
  labels: [{ type: Schema.Types.ObjectId, trim: true, default: [] }],
  status: { type: Schema.Types.ObjectId, required: true, trim: true },
  assignees: [{ type: Schema.Types.ObjectId, trim: true, default: [] }],
  links: [{ type: Schema.Types.ObjectId, trim: true, default: [] }],
  expires_at: { type: Date, default: null },
  created_at: { type: Date, default: new Date() },
  updated_at: { type: Date, default: null },
  deleted_at: { type: Date, default: null },
});

taskSchema.index({ created_at: -1 });

taskSchema.plugin(mongooseLeanVirtuals);

export default taskSchema;
