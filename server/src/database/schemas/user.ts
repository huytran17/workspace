import mongoose from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";
import IUser from "../interfaces/user";

const Schema = mongoose.Schema;

const userSchema = new Schema<IUser>(
  {
    fullname: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
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

userSchema.index({ created_at: -1 });

userSchema.plugin(mongooseLeanVirtuals);

export default userSchema;
