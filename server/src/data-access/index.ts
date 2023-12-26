import {
  AdminModel,
  OrderModel,
  PasswordResetModel,
  UserModel,
} from "@/database/models";
import makeAdminDb from "./make-admin-db";
import makeOrderDb from "./make-order-db";
import makePasswordResetDb from "./make-password-reset-db";
import makeUserDb from "./make-user-db";

const userDb = makeUserDb({
  userDbModel: UserModel,
});

const passwordResetDb = makePasswordResetDb({
  passwordResetDbModel: PasswordResetModel,
});

const orderDb = makeOrderDb({
  orderDbModel: OrderModel,
});

const adminDb = makeAdminDb({ adminDbModel: AdminModel });

const dbServices = Object.freeze({
  userDb,
  passwordResetDb,
  orderDb,
  adminDb,
});

export default dbServices;

export { adminDb, orderDb, passwordResetDb, userDb };
