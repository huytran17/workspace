import IUserDb from "@/data-access/interfaces/user-db";
import IUser from "@/database/interfaces/user";

interface IUserDetails {
  _id: string;
}

export type GetUserById = ({ _id }: IUserDetails) => Promise<IUser>;

export default function makeGetUserById({
  userDb,
}: {
  userDb: IUserDb;
}): GetUserById {
  return async function getUserById({ _id }: IUserDetails): Promise<IUser> {
    return await userDb.findById({ _id });
  };
}
