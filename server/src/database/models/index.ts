import mongoose from "mongoose";

import IAdmin from "../interfaces/admin";
import IAdminNotification from "../interfaces/admin-notification";
import IComment from "../interfaces/comment";
import ICommentPhoto from "../interfaces/comment-photo";
import ILabel from "../interfaces/label";
import IOrder from "../interfaces/order";
import IStatus from "../interfaces/order-status";
import IPasswordReset from "../interfaces/password-reset";
import IPhoto from "../interfaces/photo";
import IProduct from "../interfaces/product";
import IProductPhoto from "../interfaces/product-photo";
import IRating from "../interfaces/rating";
import IUser from "../interfaces/user";
import INotification from "../interfaces/user-notification";

import adminSchema from "../schemas/admin";
import adminNotificationSchema from "../schemas/admin-notification";
import commentSchema from "../schemas/comment";
import commentPhotoSchema from "../schemas/comment-photo";
import labelSchema from "../schemas/label";
import orderSchema from "../schemas/order";
import statusSchema from "../schemas/order-status";
import passwordResetSchema from "../schemas/password-reset";
import photoSchema from "../schemas/photo";
import productSchema from "../schemas/product";
import productPhotoSchema from "../schemas/product-photo";
import ratingSchema from "../schemas/rating";
import userSchema from "../schemas/user";
import notificationSchema from "../schemas/user-notification";

type ICommentModel = IComment & mongoose.Document;
type ILabelModel = ILabel & mongoose.Document;
type INotificationModel = INotification & mongoose.Document;
type IStatusModel = IStatus & mongoose.Document;
type IUserModel = IUser & mongoose.Document;
type IPasswordResetModel = IPasswordReset & mongoose.Document;
type IAdminModel = IAdmin & mongoose.Document;
type IProductModel = IProduct & mongoose.Document;
type IRatingModel = IRating & mongoose.Document;
type IPhotoModel = IPhoto & mongoose.Document;
type IProductPhotoModel = IProductPhoto & mongoose.Document;
type ICommentPhotoModel = ICommentPhoto & mongoose.Document;
type IOrderModel = IOrder & mongoose.Document;
type IAdminNotificationmodel = IAdminNotification & mongoose.Document;

const CommentModel = mongoose.model<ICommentModel>("comment", commentSchema);
const LabelModel = mongoose.model<ILabelModel>("label", labelSchema);
const NotificationModel = mongoose.model<INotificationModel>(
  "notification",
  notificationSchema
);
const StatusModel = mongoose.model<IStatusModel>("status", statusSchema);
const UserModel = mongoose.model<IUserModel>("user", userSchema);
const PasswordResetModel = mongoose.model<IPasswordResetModel>(
  "passwordReset",
  passwordResetSchema
);
const AdminModel = mongoose.model<IAdminModel>("admin", adminSchema);
const ProductModel = mongoose.model<IProductModel>("product", productSchema);
const RatingModel = mongoose.model<IRatingModel>("rating", ratingSchema);
const PhotoModel = mongoose.model<IPhotoModel>("photo", photoSchema);
const ProductPhotoModel = mongoose.model<IProductPhotoModel>(
  "productPhoto",
  productPhotoSchema
);
const CommentPhotoModel = mongoose.model<ICommentPhotoModel>(
  "commentPhoto",
  commentPhotoSchema
);
const OrderModel = mongoose.model<IOrderModel>("order", orderSchema);
const AdminNotificationmodel = mongoose.model<IAdminNotificationmodel>(
  "adminNotification",
  adminNotificationSchema
);

export {
  AdminModel,
  AdminNotificationmodel,
  CommentModel,
  CommentPhotoModel,
  LabelModel,
  NotificationModel,
  OrderModel,
  PasswordResetModel,
  PhotoModel,
  ProductModel,
  ProductPhotoModel,
  RatingModel,
  StatusModel,
  UserModel,
};
