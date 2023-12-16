import makeExpressCallback from "@/config/middlewares/express/make-express-callback";
import makeValidator from "@/config/middlewares/validator/make-validator";
import {
  resetPasswordController,
  sendPasswordResetEmailController,
} from "@/controllers/user/password-reset";
import {
  reset_password_validator,
  send_password_reset_email_validator,
} from "@/controllers/user/password-reset/validator";
import { Router } from "express";

const password_reset_router = Router();

password_reset_router.post(
  "/send-password-reset-email",
  makeValidator(send_password_reset_email_validator),
  makeExpressCallback(sendPasswordResetEmailController)
);

password_reset_router.put(
  "/reset-password",
  makeValidator(reset_password_validator),
  makeExpressCallback(resetPasswordController)
);

export { password_reset_router };
