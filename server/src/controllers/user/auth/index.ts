import { createAccessToken } from "@/config/access-token";
import { hashPassword, verifyPassword } from "@/config/bcrypt";
import { createUser, getUserByEmail } from "@/use-cases/user/user";
import makeGetMeController from "./get-me";
import makeLoginController from "./login";
import makeLogoutController from "./logout";
import makeRegisterController from "./register";

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

const getMeController = makeGetMeController();

const authServices = Object.freeze({
  registerController,
  loginController,
  logoutController,
  getMeController,
});

export default authServices;

export {
  getMeController,
  loginController,
  logoutController,
  registerController,
};
