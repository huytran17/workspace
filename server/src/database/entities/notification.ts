import INotification, {
  NotificationType,
  StatusType,
} from "../interfaces/notification";
import IOrder from "../interfaces/order";

export default class Notification implements INotification {
  public readonly _id: string;
  public readonly type: NotificationType;
  public readonly order: IOrder;
  public readonly status: StatusType;
  public readonly created_at: Date;
  public readonly updated_at: Date;
  public readonly deleted_at: Date;

  constructor({
    _id,
    type,
    order,
    status,
    created_at,
    updated_at,
    deleted_at,
  }: INotification) {
    this._id = _id;
    this.type = type;
    this.order = order;
    this.status = status;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deleted_at = deleted_at;
  }
}
