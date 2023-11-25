import IUserDb from "@/data-access/interfaces/user-db";
import IUser from "@/database/interfaces/user";

interface IUserDetails {
  _id: string;
}

export type HardDeleteUser = ({ _id }: IUserDetails) => Promise<IUser>;

export default function makeHardDeleteUser({
  userDb,
}: {
  userDb: IUserDb;
}): HardDeleteUser {
  return async function hardDeleteUser({ _id }: IUserDetails) {
    const user = await userDb.hardDelete({ _id });
    return user;
  };
}
