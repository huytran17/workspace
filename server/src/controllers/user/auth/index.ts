import makeRegisterController from "./register";
import { createUser, getUserByEmail } from "@/use-cases/user";
import { hashPassword } from "@/config/bcrypt";

const registerController = makeRegisterController({
  createUser,
  hashPassword,
  getUserByEmail,
});

const authServices = Object.freeze({
  registerController,
});

export default authServices;

export { registerController };
