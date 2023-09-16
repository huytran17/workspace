import ILabel from "./label";
import ILink from "./link";
import ITaskStatus from "./status";
import IUser from "./user";

export default interface ITask {
  _id: string;
  title: string;
  content?: string;
  labels?: ILabel[];
  status: ITaskStatus;
  assignees?: IUser[];
  links?: ILink[];
  expires_at?: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
