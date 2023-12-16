import { createAccessToken, verifyAccessToken } from "@/config/access-token";
import { hashPassword } from "@/config/bcrypt";
import { getEmailContent, renderEmailContent, sendMail } from "@/config/mailer";
import { generateRandomString } from "@/config/randomstring";
import {
  createPasswordReset,
  getPasswordResetByCode,
  getPasswordResetByEmail,
  getPasswordResetByEmailAndCode,
  hardDeletePasswordReset,
} from "@/use-cases/user/password-reset";
import { getUserByEmail, updateUser } from "@/use-cases/user/user";
import makeResetPasswordController from "./reset-password";
import makeSendPasswordResetEmailController from "./send-password-reset-email";

const resetPasswordController = makeResetPasswordController({
  getUserByEmail,
  getPasswordResetByEmailAndCode,
  updateUser,
  verifyAccessToken,
  hashPassword,
  hardDeletePasswordReset,
});

const sendPasswordResetEmailController = makeSendPasswordResetEmailController({
  getUserByEmail,
  getPasswordResetByEmail,
  getPasswordResetByCode,
  hardDeletePasswordReset,
  generateRandomString,
  createAccessToken,
  createPasswordReset,
  getEmailContent,
  renderEmailContent,
  sendMail,
  DASHBOARD_URL: process.env.DASHBOARD_URL,
});

const passwordResetServices = Object.freeze({
  resetPasswordController,
  sendPasswordResetEmailController,
});

export default passwordResetServices;

export { sendPasswordResetEmailController, resetPasswordController };
