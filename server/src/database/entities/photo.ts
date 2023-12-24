import IPhoto from "../interfaces/photo";

export default class Photo implements IPhoto {
  public readonly _id: string;
  public readonly location: string;
  public readonly key: string;
  public readonly bucket: string;
  public readonly created_at: Date;

  constructor({ _id, location, key, bucket, created_at }: IPhoto) {
    this._id = _id;
    this.location = location;
    this.key = key;
    this.bucket = bucket;
    this.created_at = created_at;
  }
}
