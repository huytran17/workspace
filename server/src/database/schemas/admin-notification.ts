import mongoose, { Model } from "mongoose";
import IAdminNotification, {
  AdminNotificationType,
} from "../interfaces/admin-notification";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";

const Schema = mongoose.Schema;

const adminNotificationSchema = new Schema<
  IAdminNotification,
  Model<IAdminNotification>
>(
  {
    type: { type: String, required: true, enum: AdminNotificationType },
    order: { type: Schema.Types.ObjectId, ref: "Order", required: true },
    status: { type: String, required: true, enum: NotificationStatus },
    recipients: [{ type: Schema.Types.ObjectId, ref: "Admin", default: [] }],
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

adminNotificationSchema.plugin(mongooseLeanVirtuals);

adminNotificationSchema.index({ created_at: -1 });

export default adminNotificationSchema;
