import { UserModel, PasswordResetModel, OrderModel } from "@/database/models";
import makeUserDb from "./make-user-db";
import makePasswordResetDb from "./make-password-reset-db";
import makeOrderDb from "./make-order-db";

const userDb = makeUserDb({
  userDbModel: UserModel,
});

const passwordResetDb = makePasswordResetDb({
  passwordResetDbModel: PasswordResetModel,
});

const orderDb = makeOrderDb({
  orderDbModel: OrderModel,
});

export { userDb, passwordResetDb, orderDb };
