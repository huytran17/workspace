import { createAccessToken, verifyAccessToken } from "@/config/access-token";
import { hashPassword } from "@/config/bcrypt";
import { getEmailContent, renderEmailContent, sendMail } from "@/config/mailer";
import { generateOtp } from "@/config/otp-generator";
import {
  createPasswordReset,
  getPasswordResetByCode,
  getPasswordResetByEmail,
  getPasswordResetByEmailAndCode,
  hardDeletePasswordReset,
} from "@/use-cases/user/password-reset";
import { getUserByEmail, updateUser } from "@/use-cases/user/user";
import moment from "moment";
import makeVerifyPasswordResetController from "./reset-password";
import makeSendPasswordResetEmailController from "./send-password-reset-email";

const verifyPasswordResetController = makeVerifyPasswordResetController({
  getUserByEmail,
  getPasswordResetByEmailAndCode,
  updateUser,
  verifyAccessToken,
  hashPassword,
  moment,
});

const sendPasswordResetEmailController = makeSendPasswordResetEmailController({
  getUserByEmail,
  getPasswordResetByEmail,
  getPasswordResetByCode,
  hardDeletePasswordReset,
  generateOtp,
  createAccessToken,
  createPasswordReset,
  getEmailContent,
  renderEmailContent,
  sendMail,
  moment,
  DASHBOARD_URL: process.env.DASHBOARD_URL,
});

const passwordResetServices = Object.freeze({
  verifyPasswordResetController,
  sendPasswordResetEmailController,
});

export default passwordResetServices;

export { sendPasswordResetEmailController, verifyPasswordResetController };
