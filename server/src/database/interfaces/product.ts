import ILabel from "./label";
import IProductPhoto from "./product-photo";

export default interface IProduct {
  _id: string;
  name: string;
  description?: string;
  price?: number;
  sale_percent?: number;
  sold?: number;
  inventory?: number;
  labels?: ILabel[];
  photos?: IProductPhoto[];
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
