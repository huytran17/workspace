import IPasswordReset from "../interfaces/password-reset";

export default class PasswordReset implements IPasswordReset {
  public readonly _id: string;
  public readonly email: string;
  public readonly code: number;
  public readonly created_at: Date;
  public readonly updated_at: Date;

  constructor({ _id, email, code, created_at, updated_at }: IPasswordReset) {
    this._id = _id;
    this.email = email;
    this.code = code;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
