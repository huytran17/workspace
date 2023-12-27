import mongoose, { Model } from "mongoose";
import IProductPhoto from "../interfaces/product-photo";

const Schema = mongoose.Schema;

const productPhotoSchema = new Schema<IProductPhoto, Model<IProductPhoto>>(
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

export default productPhotoSchema;
