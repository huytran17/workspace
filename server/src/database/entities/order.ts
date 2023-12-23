import IOrder, { CancelReasonType } from "../interfaces/order";
import IProduct from "../interfaces/product";
import IUser from "../interfaces/user";

export default class Order implements IOrder {
  public readonly _id: string;
  public readonly product: IProduct;
  public readonly orderer: IUser;
  public readonly cancel_reason: CancelReasonType[];
  public readonly canceled_at: Date;
  public readonly created_at: Date;
  public readonly updated_at: Date;
  public readonly deleted_at: Date;

  constructor({
    _id,
    product,
    orderer,
    cancel_reason,
    canceled_at,
    created_at,
    updated_at,
    deleted_at,
  }: {
    _id: string;
    product: IProduct;
    orderer: IUser;
    cancel_reason: CancelReasonType[];
    canceled_at: Date;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
  }) {
    this._id = _id;
    this.product = product;
    this.orderer = orderer;
    this.cancel_reason = cancel_reason;
    this.canceled_at = canceled_at;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deleted_at = deleted_at;
  }
}
