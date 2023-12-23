import IAdmin, { AdminType, IAdminAddress } from "../interfaces/admin";

export default class Admin implements IAdmin {
  public readonly _id: string;
  public readonly fullname: string;
  public readonly email: string;
  public readonly phone: string;
  public readonly address: IAdminAddress;
  public readonly hash_password: string;
  public readonly type: AdminType;
  public readonly ip?: object;
  public readonly created_at: Date;
  public readonly updated_at: Date;
  public readonly deleted_at: Date;

  constructor({
    _id,
    fullname,
    email,
    phone,
    address,
    hash_password,
    type,
    ip,
    created_at,
    updated_at,
    deleted_at,
  }: {
    _id: string;
    fullname: string;
    email: string;
    phone: string;
    address: IAdminAddress;
    hash_password: string;
    type: AdminType;
    ip?: object;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
  }) {
    this._id = _id;
    this.fullname = fullname;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.hash_password = hash_password;
    this.type = type;
    this.ip = ip;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deleted_at = deleted_at;
  }
}
