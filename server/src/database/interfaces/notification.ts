import IOrder from "./order";

export default interface INotification {
  _id: string;
  type: NotificationType;
  status: StatusType;
  order: IOrder;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export enum NotificationType {
  NEW_ORDER = "NEW_ORDER",
  UPDATED_ORDER = "UPDATED_ORDER",
  CANCELED_ORDER = "CANCELED_ORDER",
  CENSORING_ORDER = "CENSORING_ORDER",
  CENSORED_ORDER = "CENSORED_ORDER",
  SHIPPING_ORDER = "SHIPPING_ORDER",
  DELIVERED_ORDER = "DELIVERED_ORDER",
}

export enum StatusType {
  READ = "READ",
  UNREAD = "UNREAD",
}
