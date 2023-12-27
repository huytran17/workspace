import IPhoto from "./photo";

export default interface ICommentPhoto {
  _id: string;
  photos: IPhoto[];
  created_at: Date;
  updated_at: Date;
}
