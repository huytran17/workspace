import mongoose, { Model } from "mongoose";
import IProduct from "../interfaces/product";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";

const Schema = mongoose.Schema;

const productSchema = new Schema<IProduct, Model<IProduct>>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true, default: "" },
    price: { type: Number, default: 0 },
    sale_percent: { type: Number, default: 0 },
    sold: { type: Number, default: 0 },
    inventory: { type: Number, default: 0 },
    labels: [{ type: Schema.Types.ObjectId, ref: "Label", default: [] }],
    photos: [{ type: Schema.Types.ObjectId, ref: "ProductPhoto", default: [] }],
    likes: [{ type: Schema.Types.ObjectId, ref: "User", default: [] }],
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

productSchema.plugin(mongooseLeanVirtuals);

productSchema.index({ created_at: -1 });

export default productSchema;
