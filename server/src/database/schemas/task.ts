import mongoose, { Model } from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";
import ITask from "../interfaces/task";

const Schema = mongoose.Schema;

const taskSchema = new Schema<ITask, Model<ITask>>(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, trim: true, default: "" },
    labels: [{ type: Schema.Types.ObjectId, ref: "Label", default: [] }],
    status: { type: Schema.Types.ObjectId, ref: "Status", required: true },
    assignees: [{ type: Schema.Types.ObjectId, ref: "User", default: [] }],
    links: [{ type: Schema.Types.ObjectId, ref: "Link", default: [] }],
    expires_at: { type: Date, default: null },
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

taskSchema.index({ created_at: -1 });

taskSchema.plugin(mongooseLeanVirtuals);

export default taskSchema;
