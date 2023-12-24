import IUserNotification, {
  UserNotificationType,
} from "../interfaces/user-notification";
import IOrder from "../interfaces/order";
import IUser from "../interfaces/user";

export default class UserNotification implements IUserNotification {
  public readonly _id: string;
  public readonly type: UserNotificationType;
  public readonly order: IOrder;
  public readonly status: NotificationStatus;
  public readonly recipient: IUser;
  public readonly created_at: Date;
  public readonly updated_at: Date;
  public readonly deleted_at: Date;

  constructor({
    _id,
    type,
    order,
    status,
    recipient,
    created_at,
    updated_at,
    deleted_at,
  }: IUserNotification) {
    this._id = _id;
    this.type = type;
    this.order = order;
    this.status = status;
    this.recipient = recipient;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deleted_at = deleted_at;
  }
}
