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
  return async function getUserById({ _id }: IUserDetails) {
    const user = await userDb.findById({ _id });
    return user;
  };
}
