import IUserDb from "@/data-access/interfaces/user-db";
import IUser from "@/database/interfaces/user";

interface IPayload {
  _id: string;
}

export type DeleteUser = ({ _id }: IPayload) => Promise<IUser>;

export default function makeDeleteUser({
  userDb,
}: {
  userDb: IUserDb;
}): DeleteUser {
  return async function deleteUser({ _id }: IPayload): Promise<IUser> {
    return await userDb.delete({ _id });
  };
}
