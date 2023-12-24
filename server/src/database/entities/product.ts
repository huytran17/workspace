import ILabel from "../interfaces/label";
import IProduct from "../interfaces/product";
import IProductPhoto from "../interfaces/product-photo";
import IUser from "../interfaces/user";

export default class Product implements IProduct {
  public readonly _id: string;
  public readonly name: string;
  public readonly description?: string;
  public readonly price?: number;
  public readonly sale_percent?: number;
  public readonly sold?: number;
  public readonly inventory?: number;
  public readonly labels?: ILabel[];
  public readonly photos?: IProductPhoto[];
  public readonly likes: IUser[];
  public readonly created_at: Date;
  public readonly updated_at: Date;
  public readonly deleted_at: Date;

  constructor({
    _id,
    name,
    description,
    price,
    sale_percent,
    sold,
    inventory,
    labels,
    photos,
    likes,
    created_at,
    updated_at,
    deleted_at,
  }: IProduct) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.sale_percent = sale_percent;
    this.sold = sold;
    this.inventory = inventory;
    this.labels = labels;
    this.photos = photos;
    this.likes = likes;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deleted_at = deleted_at;
  }
}
