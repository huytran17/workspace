import IUser from "@/database/interfaces/user";

export default interface IUserDb {
  findAll: () => Promise<IUser[]>;
  findById: ({ id }: { id: string }) => Promise<IUser>;
  findByEmail: ({ email }: { email: string }) => Promise<IUser>;
  insert: (payload: IUser) => Promise<IUser>;
  update: (payload: IUser) => Promise<IUser>;
  delete: ({ id }: { id: string }) => Promise<IUser>;
  hardDelete: ({ id }: { id: string }) => Promise<IUser>;
}
