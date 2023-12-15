import { verifyAccessToken } from "@/config/access-token";
import { hashPassword } from "@/config/bcrypt";
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
import makeCreatePasswordResetController from "./create-password-reset";
import makeVerifyPasswordResetController from "./reset-password";

const createPasswordResetController = makeCreatePasswordResetController({
  getPasswordResetByEmail,
  getPasswordResetByCode,
  createPasswordReset,
  hardDeletePasswordReset,
  generateOtp,
  moment,
});

const verifyPasswordResetController = makeVerifyPasswordResetController({
  getUserByEmail,
  getPasswordResetByEmailAndCode,
  updateUser,
  verifyAccessToken,
  hashPassword,
  moment,
});

const passwordResetServices = Object.freeze({
  createPasswordResetController,
  verifyPasswordResetController,
});

export default passwordResetServices;

export { createPasswordResetController, verifyPasswordResetController };
