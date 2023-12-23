import IUser from "./user";

export default interface IRating {
  _id: string;
  score: number;
  created_by: IUser;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
