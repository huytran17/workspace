import IUserDb from "@/data-access/interfaces/user-db";
import IUser from "@/database/interfaces/user";

interface IUserDetails {
  email: string;
}

export type GetUserByEmail = ({ email }: IUserDetails) => Promise<IUser>;

export default function makeGetUserByEmail({
  userDb,
}: {
  userDb: IUserDb;
}): GetUserByEmail {
  return async function getUserByEmail({
    email,
  }: IUserDetails): Promise<IUser> {
    const user = await userDb.findByEmail({ email });
    return user;
  };
}
