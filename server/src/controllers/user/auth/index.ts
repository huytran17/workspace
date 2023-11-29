import { createAccessToken } from "@/config/access-token";
import { hashPassword, verifyPassword } from "@/config/bcrypt";
import { createUser, getUserByEmail } from "@/use-cases/user";
import makeLoginController from "./login";
import makeRegisterController from "./register";
import makeLogoutController from "./logout";

const registerController = makeRegisterController({
  createUser,
  hashPassword,
  getUserByEmail,
});

const loginController = makeLoginController({
  getUserByEmail,
  verifyPassword,
  createAccessToken,
});

const logoutController = makeLogoutController({
  getUserByEmail,
});

const authServices = Object.freeze({
  registerController,
  loginController,
  logoutController,
});

export default authServices;

export { loginController, registerController, logoutController };
