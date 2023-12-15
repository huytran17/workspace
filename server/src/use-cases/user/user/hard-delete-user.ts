import IUserDb from "@/data-access/interfaces/user-db";
import IUser from "@/database/interfaces/user";

interface IPayload {
  _id: string;
}

export type HardDeleteUser = ({ _id }: IPayload) => Promise<IUser>;

export default function makeHardDeleteUser({
  userDb,
}: {
  userDb: IUserDb;
}): HardDeleteUser {
  return async function hardDeleteUser({ _id }) {
    return await userDb.hardDelete({ _id });
  };
}
