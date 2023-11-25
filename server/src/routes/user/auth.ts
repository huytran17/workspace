import makeExpressCallback from "@/config/middlewares/express/make-express-callback";
import makeValidator from "@/config/middlewares/validator/make-validator";
import { registerController } from "@/controllers/user/auth";
import { registerValidator } from "@/controllers/user/auth/validator";
import { Router } from "express";

const auth_router = Router();

auth_router.post(
  "/register",
  makeValidator(registerValidator),
  makeExpressCallback(registerController)
);

export { auth_router };
