import IUser from "../interfaces/user";

export default class User implements IUser {
  public readonly _id: string;
  public readonly fullname: string;
  public readonly email: string;
  public readonly hash_password: string;
  public readonly ip?: Object;
  public readonly created_at: Date;
  public readonly updated_at: Date;
  public readonly deleted_at: Date;

  constructor({
    _id,
    fullname,
    email,
    hash_password,
    ip,
    created_at,
    updated_at,
    deleted_at,
  }: {
    _id: string;
    fullname: string;
    email: string;
    hash_password: string;
    ip?: Object;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
  }) {
    this._id = _id;
    this.fullname = fullname;
    this.email = email;
    this.hash_password = hash_password;
    this.ip = ip;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deleted_at = deleted_at;
  }
}
