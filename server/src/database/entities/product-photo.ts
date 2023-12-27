import IPhoto from "../interfaces/photo";
import IProductPhoto from "../interfaces/product-photo";

export default class ProductPhoto implements IProductPhoto {
  public readonly _id: string;
  public readonly photos: IPhoto[];
  public readonly created_at: Date;
  public readonly updated_at: Date;

  constructor({ _id, photos, created_at, updated_at }: IProductPhoto) {
    this._id = _id;
    this.photos = photos;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
