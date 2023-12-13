import IUserDb from "@/data-access/interfaces/user-db";
import IUser from "@/database/interfaces/user";

interface IUserDetails {
  _id: string;
}

export type DeleteUser = ({ _id }: IUserDetails) => Promise<IUser>;

export default function makeDeleteUser({
  userDb,
}: {
  userDb: IUserDb;
}): DeleteUser {
  return async function deleteUser({ _id }: IUserDetails): Promise<IUser> {
    const user = await userDb.delete({ _id });
    return user;
  };
}
