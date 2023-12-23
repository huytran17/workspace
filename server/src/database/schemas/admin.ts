import mongoose, { Model } from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";
import IAdmin from "../interfaces/admin";

const Schema = mongoose.Schema;

const adminSchema = new Schema<IAdmin, Model<IAdmin>>(
  {
    fullname: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    address: {
      province: { type: String, required: true, trim: true },
      district: { type: String, required: true, trim: true },
      commune: { type: String, required: true, trim: true },
      house_number: { type: String, trim: true, default: "" },
      note: { type: String, trim: true, default: "" },
    },
    hash_password: { type: String, required: true, trim: true },
    ip: { type: Object },
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

adminSchema.index({ created_at: -1 });

adminSchema.plugin(mongooseLeanVirtuals);

export default adminSchema;
