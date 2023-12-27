import IUserDb, {
  UserPayloadOmitProps,
} from "@/data-access/interfaces/user-db";
import IUser from "@/database/interfaces/user";

interface IPayload {
  userDetails: Omit<IUser, UserPayloadOmitProps>;
}

export type CreateUser = ({ userDetails }: IPayload) => Promise<IUser>;

export default function makeCreateUser({
  userDb,
}: {
  userDb: IUserDb;
}): CreateUser {
  return async function createUser({ userDetails }) {
    return await userDb.insert(userDetails);
  };
}
