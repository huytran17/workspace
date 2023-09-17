import mongoose from "mongoose";

import IComment from "../interfaces/comment";
import ILabel from "../interfaces/label";
import ILink from "../interfaces/link";
import INotification from "../interfaces/notification";
import IStatus from "../interfaces/status";
import ITask from "../interfaces/task";
import IUser from "../interfaces/user";

import commentSchema from "../schemas/comment";
import labelSchema from "../schemas/label";
import linkSchema from "../schemas/link";
import notificationSchema from "../schemas/notification";
import statusSchema from "../schemas/status";
import taskSchema from "../schemas/task";
import userSchema from "../schemas/user";

type ICommentModel = IComment & mongoose.Document;
type ILabelModel = ILabel & mongoose.Document;
type ILinkModel = ILink & mongoose.Document;
type INotificationModel = INotification & mongoose.Document;
type IStatusModel = IStatus & mongoose.Document;
type ITaskModel = ITask & mongoose.Document;
type IUserModel = IUser & mongoose.Document;

const CommentModel = mongoose.model<ICommentModel>("comment", commentSchema);
const LabelModel = mongoose.model<ILabelModel>("label", labelSchema);
const LinkModel = mongoose.model<ILinkModel>("link", linkSchema);
const NotificationModel = mongoose.model<INotificationModel>(
  "notification",
  notificationSchema
);
const StatusModel = mongoose.model<IStatusModel>("status", statusSchema);
const TaskModel = mongoose.model<ITaskModel>("task", taskSchema);
const UserModel = mongoose.model<IUserModel>("user", userSchema);

export {
  CommentModel,
  LabelModel,
  LinkModel,
  NotificationModel,
  StatusModel,
  TaskModel,
  UserModel,
};
