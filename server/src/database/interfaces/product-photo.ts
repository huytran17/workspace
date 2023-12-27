import IPhoto from "./photo";

export default interface IProductPhoto {
  _id: string;
  photos: IPhoto[];
  created_at: Date;
  updated_at: Date;
}
