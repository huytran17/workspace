import IUserDb from "@/data-access/interfaces/user-db";
import IUser from "@/database/interfaces/user";

interface IPayload {
  userDetails: Partial<IUser>;
}

export type UpdateUser = ({ userDetails }: IPayload) => Promise<IUser>;

export default function makeUpdateUser({
  userDb,
}: {
  userDb: IUserDb;
}): UpdateUser {
  return async function updateUser({ userDetails }: IPayload): Promise<IUser> {
    return await userDb.update(userDetails);
  };
}
