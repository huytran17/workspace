import mongoose from "mongoose";

import IUser from "../interfaces/user";

import userSchema from "../schemas/user";

type IUserModel = IUser & mongoose.Document;

const UserModel = mongoose.model<IUserModel>("user", userSchema);

export { UserModel };
