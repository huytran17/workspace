import ITask from "./task";

export default interface INotification {
  _id: string;
  type: NotificationType;
  status: Status;
  task: ITask;
  content: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export enum NotificationType {
  NEW_TASK_ASSIGNED = "new-task-assigned",
  REMOVED_FROM_TASK = "removed-from-task",
  UPDATED_CONTENT = "content-updated",
  IS_BEING_EXPIRED = "is-being-expired",
  NEW_COMMENT = "new-comment",
  STATUS_CHANGED = "status-changed",
}

export enum Status {
  READ = "read",
  UNREAD = "unread",
}
