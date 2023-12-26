import IUser from "@/database/interfaces/user";

export type UserPayloadOmitProps =
  | "_id"
  | "created_at"
  | "updated_at"
  | "deleted_at";

export default interface IUserDb {
  findAll: () => Promise<IUser[]>;
  findById: ({ _id }: { _id: string }) => Promise<IUser>;
  findByEmail: ({ email }: { email: string }) => Promise<IUser>;
  insert: (payload: Omit<IUser, UserPayloadOmitProps>) => Promise<IUser>;
  update: (payload: Partial<IUser>) => Promise<IUser>;
  delete: ({ _id }: { _id: string }) => Promise<IUser>;
  hardDelete: ({ _id }: { _id: string }) => Promise<IUser>;
}
