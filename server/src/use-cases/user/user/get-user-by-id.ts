import IUserDb from "@/data-access/interfaces/user-db";
import IUser from "@/database/interfaces/user";

interface IPayload {
  _id: string;
}

export type GetUserById = ({ _id }: IPayload) => Promise<IUser>;

export default function makeGetUserById({
  userDb,
}: {
  userDb: IUserDb;
}): GetUserById {
  return async function getUserById({ _id }: IPayload): Promise<IUser> {
    return await userDb.findById({ _id });
  };
}
