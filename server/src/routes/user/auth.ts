import makeExpressCallback from "@/config/middlewares/express/make-express-callback";
import makeValidator from "@/config/middlewares/validator/make-validator";
import {
  registerController,
  loginController,
  logoutController,
} from "@/controllers/user/auth";
import {
  loginValidator,
  registerValidator,
} from "@/controllers/user/auth/validator";
import { Router } from "express";

const auth_router = Router();

auth_router.post(
  "/register",
  makeValidator(registerValidator),
  makeExpressCallback(registerController)
);

auth_router.post(
  "/login",
  makeValidator(loginValidator),
  makeExpressCallback(loginController)
);

auth_router.post("/logout", makeExpressCallback(logoutController));

export { auth_router };
