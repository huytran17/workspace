import IAdmin from "./admin";
import IOrder from "./order";

export default interface IAdminNotification {
  _id: string;
  type: AdminNotificationType;
  order: IOrder;
  status: NotificationStatus;
  recipients: IAdmin[];
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export enum AdminNotificationType {
  NEW_ORDER = "NEW_ORDER",
  UPDATED_ORDER = "UPDATED_ORDER",
  CANCELED_ORDER = "CANCELED_ORDER",
  DELIVERED_ORDER = "DELIVERED_ORDER",
}
