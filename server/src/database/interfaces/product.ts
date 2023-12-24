import ILabel from "./label";
import IProductPhoto from "./product-photo";
import IUser from "./user";

export default interface IProduct {
  _id: string;
  name: string;
  description?: string;
  price?: number;
  classify?: {
    type: string;
    price: number;
  }[];
  sale_percent?: number;
  sold?: number;
  inventory?: number;
  labels?: ILabel[];
  photos?: IProductPhoto[];
  likes: IUser[];
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
