import IOrder from "./order";
import IUser from "./user";

export default interface IUserNotification {
  _id: string;
  type: UserNotificationType;
  status: NotificationStatus;
  order: IOrder;
  recipient: IUser;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export enum UserNotificationType {
  CENSORING_ORDER = "CENSORING_ORDER",
  CENSORED_ORDER = "CENSORED_ORDER",
  SHIPPING_ORDER = "SHIPPING_ORDER",
  DELIVERED_ORDER = "DELIVERED_ORDER",
}
