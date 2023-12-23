import IComment from "../interfaces/comment";
import ICommentPhoto from "../interfaces/comment-photo";
import IProduct from "../interfaces/product";
import IRating from "../interfaces/rating";
import IUser from "../interfaces/user";

export default class Comment implements IComment {
  public readonly _id: string;
  public readonly content: string;
  public readonly product: IProduct;
  public readonly rating: IRating;
  public readonly is_published: boolean;
  public readonly photos: ICommentPhoto[];
  public readonly likes: IUser[];
  public readonly dislikes: IUser[];
  public readonly created_by: IUser;
  public readonly created_at: Date;
  public readonly updated_at: Date;
  public readonly deleted_at: Date;

  constructor({
    _id,
    content,
    product,
    rating,
    is_published,
    photos,
    likes,
    dislikes,
    created_by,
    created_at,
    updated_at,
    deleted_at,
  }: {
    _id: string;
    content: string;
    product: IProduct;
    rating: IRating;
    is_published: boolean;
    photos: ICommentPhoto[];
    likes: IUser[];
    dislikes: IUser[];
    created_by: IUser;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
  }) {
    this._id = _id;
    this.content = content;
    this.product = product;
    this.rating = rating;
    this.is_published = is_published;
    this.photos = photos;
    this.likes = likes;
    this.dislikes = dislikes;
    this.created_by = created_by;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deleted_at = deleted_at;
  }
}
