import IComment from "../interfaces/comment";
import ITask from "../interfaces/task";
import IUser from "../interfaces/user";

export default class Comment implements IComment {
  public readonly _id: string;
  public readonly content: string;
  public readonly task: ITask;
  public readonly created_by: IUser;
  public readonly created_at: Date;
  public readonly updated_at: Date;
  public readonly deleted_at: Date;

  constructor({
    _id,
    content,
    task,
    created_by,
    created_at,
    updated_at,
    deleted_at,
  }: {
    _id: string;
    content: string;
    task: ITask;
    created_by: IUser;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
  }) {
    this._id = _id;
    this.content = content;
    this.task = task;
    this.created_by = created_by;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deleted_at = deleted_at;
  }
}
