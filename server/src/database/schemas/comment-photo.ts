import mongoose, { Model } from "mongoose";
import ICommentPhoto from "../interfaces/comment-photo";

const Schema = mongoose.Schema;

const commentPhotoSchema = new Schema<ICommentPhoto, Model<ICommentPhoto>>(
  {
    photos: [{ type: Schema.Types.ObjectId, ref: "Photo", default: [] }],
  },
  {
    toJSON: { virtuals: true },
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

export default commentPhotoSchema;
