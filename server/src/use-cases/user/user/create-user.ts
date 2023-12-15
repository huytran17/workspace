import IUserDb from "@/data-access/interfaces/user-db";
import IUser from "@/database/interfaces/user";

type OmitProps = "_id" | "created_at" | "updated_at" | "deleted_at";

interface IPayload {
  userDetails: Omit<IUser, OmitProps>;
}

export type CreateUser = ({ userDetails }: IPayload) => Promise<IUser>;

export default function makeCreateUser({
  userDb,
}: {
  userDb: IUserDb;
}): CreateUser {
  return async function createUser({ userDetails }) {
    return await userDb.insert(userDetails);
  };
}
