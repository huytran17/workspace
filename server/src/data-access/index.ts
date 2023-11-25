import { UserModel } from "@/database/models";
import makeUserDb from "./make-user-db";

const userDb = makeUserDb({
  userDbModel: UserModel,
});

export { userDb };
