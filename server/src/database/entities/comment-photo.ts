import ICommentPhoto from "../interfaces/comment-photo";
import IPhoto from "../interfaces/photo";

export default class CommentPhoto implements ICommentPhoto {
  public readonly _id: string;
  public readonly photos: IPhoto[];
  public readonly created_at: Date;

  constructor({ _id, photos, created_at }: ICommentPhoto) {
    this._id = _id;
    this.photos = photos;
    this.created_at = created_at;
  }
}
