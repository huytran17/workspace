import ILabel from "../interfaces/label";
import ILink from "../interfaces/link";
import ITask from "../interfaces/task";
import IStatus from "../interfaces/status";
import IUser from "../interfaces/user";

export default class Task implements ITask {
  public readonly _id: string;
  public readonly title: string;
  public readonly content?: string;
  public readonly labels?: ILabel[];
  public readonly status: IStatus;
  public readonly assignees?: IUser[];
  public readonly links?: ILink[];
  public readonly expires_at?: Date;
  public readonly created_at: Date;
  public readonly updated_at: Date;
  public readonly deleted_at: Date;

  constructor({
    _id,
    title,
    content,
    labels,
    status,
    assignees,
    links,
    expires_at,
    created_at,
    updated_at,
    deleted_at,
  }: {
    _id: string;
    title: string;
    content?: string;
    labels?: ILabel[];
    status: IStatus;
    assignees?: IUser[];
    links?: ILink[];
    expires_at?: Date;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
  }) {
    this._id = _id;
    this.title = title;
    this.content = content;
    this.labels = labels;
    this.status = status;
    this.assignees = assignees;
    this.links = links;
    this.expires_at = expires_at;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deleted_at = deleted_at;
  }
}
