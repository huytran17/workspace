import mongoose, { Model } from "mongoose";
import IRating from "../interfaces/rating";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";

const Schema = mongoose.Schema;

const ratingSchema = new Schema<IRating, Model<IRating>>(
  {
    score: { type: Number, max: 5, default: 5 },
    created_by: { type: Schema.Types.ObjectId, required: true, ref: "User" },
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

ratingSchema.plugin(mongooseLeanVirtuals);

ratingSchema.index({ created_at: -1 });

export default ratingSchema;
