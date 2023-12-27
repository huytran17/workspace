import {
  AdminModel,
  CommentPhotoModel,
  OrderModel,
  PasswordResetModel,
  UserModel,
} from "@/database/models";
import makeAdminDb from "./make-admin-db";
import makeCommentPhotoDb from "./make-comment-photo-db";
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

const commentPhotoDb = makeCommentPhotoDb({
  commentPhotoDbModel: CommentPhotoModel,
});

const dbServices = Object.freeze({
  userDb,
  passwordResetDb,
  orderDb,
  adminDb,
  commentPhotoDb,
});

export default dbServices;

export { adminDb, commentPhotoDb, orderDb, passwordResetDb, userDb };
