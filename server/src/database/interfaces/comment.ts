import ICommentPhoto from "./comment-photo";
import IProduct from "./product";
import IRating from "./rating";
import IUser from "./user";

export default interface IComment {
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
}
