export default interface IUser {
  _id: string;
  fullname: string;
  email: string;
  hash_password: string;
  ip?: Object;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
