export default interface IOrderStatus {
  _id: string;
  type: StatusType;
  color: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export enum StatusType {
  CENSORING = "CENSORING",
  CENSORED = "CENSORED",
  SHIPPING = "SHIPPING",
  DELIVERED = "DELIVERED",
}
