import INotification, {
  NotificationType,
  Status,
} from "../interfaces/notification";
import ITask from "../interfaces/task";

export default class Notification implements INotification {
  public readonly _id: string;
  public readonly type: NotificationType;
  public readonly status: Status;
  public readonly task: ITask;
  public readonly content: string;
  public readonly created_at: Date;
  public readonly updated_at: Date;
  public readonly deleted_at: Date;

  constructor({
    _id,
    type,
    status,
    task,
    content,
    created_at,
    updated_at,
    deleted_at,
  }: {
    _id: string;
    type: NotificationType;
    status: Status;
    task: ITask;
    content: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
  }) {
    this._id = _id;
    this.type = type;
    this.status = status;
    this.task = task;
    this.content = content;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deleted_at = deleted_at;
  }
}
