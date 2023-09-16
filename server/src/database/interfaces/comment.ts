import ITask from "./task";
import IUser from "./user";

export default interface IComment {
  _id: string;
  content: string;
  task: ITask;
  created_by: IUser;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
