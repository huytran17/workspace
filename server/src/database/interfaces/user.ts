export default interface IUser {
  _id: string;
  fullname: string;
  email: string;
  phone: string;
  address: IUserAddress;
  hash_password: string;
  ip?: object;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export interface IUserAddress {
  province: string;
  district: string;
  commune: string;
  house_number?: string;
  note?: string;
}
