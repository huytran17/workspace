import ILink from "../interfaces/link";

export default class Link implements ILink {
  public readonly _id: string;
  public readonly title: string;
  public readonly uri: string;
  public readonly created_at: Date;
  public readonly updated_at: Date;
  public readonly deleted_at: Date;

  constructor({
    _id,
    title,
    uri,
    created_at,
    updated_at,
    deleted_at,
  }: {
    _id: string;
    title: string;
    uri: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
  }) {
    this._id = _id;
    this.title = title;
    this.uri = uri;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deleted_at = deleted_at;
  }
}
