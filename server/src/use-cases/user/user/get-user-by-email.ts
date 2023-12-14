import IUserDb from "@/data-access/interfaces/user-db";
import IUser from "@/database/interfaces/user";

interface IPayload {
  email: string;
}

export type GetUserByEmail = ({ email }: IPayload) => Promise<IUser>;

export default function makeGetUserByEmail({
  userDb,
}: {
  userDb: IUserDb;
}): GetUserByEmail {
  return async function getUserByEmail({ email }: IPayload): Promise<IUser> {
    return await userDb.findByEmail({ email });
  };
}
