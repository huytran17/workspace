import mongoose, { Model } from "mongoose";
import IOrder, { OrderStatusType } from "../interfaces/order";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";

const Schema = mongoose.Schema;

const orderSchema = new Schema<IOrder, Model<IOrder>>(
  {
    product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    customer: { type: Schema.Types.ObjectId, ref: "User", required: true },
    cancel_reason: [{ type: String, required: true, default: [] }],
    is_delivered_to_customer: { type: Boolean, default: false },
    is_customer_received: { type: Boolean, default: false },
    is_rated: { type: Boolean, default: false },
    status: { type: String, required: true, enum: OrderStatusType },
    canceled_at: { type: Date, default: null },
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

orderSchema.plugin(mongooseLeanVirtuals);

orderSchema.index({ created_at: -1 });

export default orderSchema;
