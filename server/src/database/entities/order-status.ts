import IOrderStatus, { StatusType } from "../interfaces/order-status";

export default class OrderStatus implements IOrderStatus {
  public readonly _id: string;
  public readonly type: StatusType;
  public readonly color: string;
  public readonly created_at: Date;
  public readonly updated_at: Date;
  public readonly deleted_at: Date;

  constructor({
    _id,
    type,
    color,
    created_at,
    updated_at,
    deleted_at,
  }: {
    _id: string;
    type: StatusType;
    color: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
  }) {
    this._id = _id;
    this.type = type;
    this.color = color;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deleted_at = deleted_at;
  }
}
