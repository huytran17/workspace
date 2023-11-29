import makeRegisterController from "./register";
import makeLoginController from "./login";
import { createUser, getUserByEmail } from "@/use-cases/user";
import { hashPassword, verifyPassword } from "@/config/bcrypt";

const registerController = makeRegisterController({
  createUser,
  hashPassword,
  getUserByEmail,
});

const loginController = makeLoginController({
  getUserByEmail,
  verifyPassword,
});

const authServices = Object.freeze({
  registerController,
  loginController,
});

export default authServices;

export { registerController, loginController };
