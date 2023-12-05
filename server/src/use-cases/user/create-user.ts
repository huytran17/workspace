import IUserDb from "@/data-access/interfaces/user-db";
import IUser from "@/database/interfaces/user";

type OmittedFields = "_id" | "created_at" | "updated_at" | "deleted_at";

interface IUserDetails {
  userDetails: Omit<IUser, OmittedFields>;
}

export type CreateUser = ({ userDetails }: IUserDetails) => Promise<IUser>;

export default function makeCreateUser({
  userDb,
}: {
  userDb: IUserDb;
}): CreateUser {
  return async function createUser({ userDetails }: IUserDetails) {
    const user = await userDb.insert(userDetails);
    return user;
  };
}
