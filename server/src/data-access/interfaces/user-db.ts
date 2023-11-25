import IUser from "@/database/interfaces/user";

export default interface IUserDb {
  findAll: () => Promise<IUser[]>;
  findById: ({ _id }: { _id: string }) => Promise<IUser>;
  findByEmail: ({ email }: { email: string }) => Promise<IUser>;
  insert: (
    payload: Omit<IUser, "_id" | "created_at" | "updated_at" | "deleted_at">
  ) => Promise<IUser>;
  update: (payload: IUser) => Promise<IUser>;
  delete: ({ _id }: { _id: string }) => Promise<IUser>;
  hardDelete: ({ _id }: { _id: string }) => Promise<IUser>;
}
