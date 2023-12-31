import IOrder, { CancelReasonType, OrderStatusType } from "../interfaces/order";
import IProduct from "../interfaces/product";
import IUser from "../interfaces/user";

export default class Order implements IOrder {
  public readonly _id: string;
  public readonly product: IProduct;
  public readonly customer: IUser;
  public readonly cancel_reason: CancelReasonType[];
  public readonly is_delivered_to_customer: boolean;
  public readonly is_customer_received: boolean;
  public readonly is_rated: boolean;
  public readonly amount: number;
  public readonly lading_code: string;
  public readonly classify: string;
  public readonly status: OrderStatusType;
  public readonly canceled_at: Date;
  public readonly created_at: Date;
  public readonly updated_at: Date;
  public readonly deleted_at: Date;

  constructor({
    _id,
    product,
    customer,
    cancel_reason,
    is_delivered_to_customer,
    is_customer_received,
    is_rated,
    amount,
    lading_code,
    status,
    canceled_at,
    created_at,
    updated_at,
    deleted_at,
  }: IOrder) {
    this._id = _id;
    this.product = product;
    this.customer = customer;
    this.cancel_reason = cancel_reason;
    this.is_delivered_to_customer = is_delivered_to_customer;
    this.is_customer_received = is_customer_received;
    this.is_rated = is_rated;
    this.status = status;
    this.amount = amount;
    this.lading_code = lading_code;
    this.canceled_at = canceled_at;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deleted_at = deleted_at;
  }
}
