import mongoose, { Model } from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";
import IComment from "../interfaces/comment";

const Schema = mongoose.Schema;

const commentSchema = new Schema<IComment, Model<IComment>>(
  {
    content: { type: String, required: true, trim: true },
    task: { type: Schema.Types.ObjectId, required: true, trim: true },
    created_by: { type: Schema.Types.ObjectId, required: true, trim: true },
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

commentSchema.index({ created_at: -1 });

commentSchema.plugin(mongooseLeanVirtuals);

export default commentSchema;
