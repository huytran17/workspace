import IProduct from "./product";
import IUser from "./user";

export default interface IOrder {
  _id: string;
  product: IProduct;
  orderer: IUser;
  cancel_reason: CancelReasonType[];
  canceled_at: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export enum CancelReasonType {
  CHANGE_PRODUCT = "CHANGE_PRODUCT",
  CHANGE_ADDRESS = "CHANGE_ADDRESS",
  CHANGE_PERSONAL_INFO = "CHANGE_PERSONAL_INFO",
  DONT_WANT_TO_BUY = "DONT_WANT_TO_BUY",
  OTHER = "OTHER",
}
