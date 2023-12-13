import { UserModel, PasswordResetModel } from "@/database/models";
import makeUserDb from "./make-user-db";
import makePasswordResetDb from "./make-password-reset-db";

const userDb = makeUserDb({
  userDbModel: UserModel,
});

const passwordResetDb = makePasswordResetDb({
  passwordResetDbModel: PasswordResetModel,
});

export { userDb, passwordResetDb };
