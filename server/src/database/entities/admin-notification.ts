import IAdmin from "../interfaces/admin";
import IAdminNotification, {
  AdminNotificationType,
} from "../interfaces/admin-notification";
import IOrder from "../interfaces/order";

export default class AdminNotification implements IAdminNotification {
  public readonly _id: string;
  public readonly type: AdminNotificationType;
  public readonly order: IOrder;
  public readonly status: NotificationStatus;
  public readonly recipients: IAdmin[];
  public readonly created_at: Date;
  public readonly updated_at: Date;
  public readonly deleted_at: Date;

  constructor({
    _id,
    type,
    order,
    status,
    recipients,
    created_at,
    updated_at,
    deleted_at,
  }: IAdminNotification) {
    this._id = _id;
    this.type = type;
    this.order = order;
    this.status = status;
    this.recipients = recipients;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deleted_at = deleted_at;
  }
}
