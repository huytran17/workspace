import IOrder, { CancelReasonType, OrderStatusType } from "../interfaces/order";
import IProduct from "../interfaces/product";
import IUser from "../interfaces/user";

export default class Order implements IOrder {
  public readonly _id: string;
  public readonly product: IProduct;
  public readonly orderer: IUser;
  public readonly cancel_reason: CancelReasonType[];
  public readonly is_delivered_to_customer: boolean;
  public readonly is_customer_received: boolean;
  public readonly status: OrderStatusType;
  public readonly canceled_at: Date;
  public readonly created_at: Date;
  public readonly updated_at: Date;
  public readonly deleted_at: Date;

  constructor({
    _id,
    product,
    orderer,
    cancel_reason,
    is_delivered_to_customer,
    is_customer_received,
    status,
    canceled_at,
    created_at,
    updated_at,
    deleted_at,
  }: IOrder) {
    this._id = _id;
    this.product = product;
    this.orderer = orderer;
    this.cancel_reason = cancel_reason;
    this.is_delivered_to_customer = is_delivered_to_customer;
    this.is_customer_received = is_customer_received;
    this.status = status;
    this.canceled_at = canceled_at;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deleted_at = deleted_at;
  }
}
