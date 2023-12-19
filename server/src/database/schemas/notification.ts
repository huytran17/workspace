import mongoose, { Model } from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";
import INotification, {
  NotificationType,
  Status,
} from "../interfaces/notification";

const Schema = mongoose.Schema;

const notificationSchema = new Schema<INotification, Model<INotification>>(
  {
    type: { type: String, required: true, trim: true, enum: NotificationType },
    status: { type: String, required: true, trim: true, enum: Status },
    task: { type: Schema.Types.ObjectId, required: true },
    content: { type: String, required: true, trim: true },
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

notificationSchema.index({ created_at: -1 });

notificationSchema.plugin(mongooseLeanVirtuals);

export default notificationSchema;
