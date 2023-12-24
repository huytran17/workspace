import IRating from "../interfaces/rating";
import IUser from "../interfaces/user";

export default class Rating implements IRating {
  public readonly _id: string;
  public readonly score: number;
  public readonly created_by: IUser;
  public readonly created_at: Date;
  public readonly updated_at: Date;
  public readonly deleted_at: Date;

  constructor({
    _id,
    score,
    created_by,
    created_at,
    updated_at,
    deleted_at,
  }: IRating) {
    this._id = _id;
    this.score = score;
    this.created_by = created_by;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deleted_at = deleted_at;
  }
}
