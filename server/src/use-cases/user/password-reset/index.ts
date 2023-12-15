import { passwordResetDb } from "@/data-access";
import makeCreatePasswordReset from "./create-password-reset";
import makeGetPasswordResetByCode from "./get-password-reset-by-code";
import makeGetPasswordResetByEmail from "./get-password-reset-by-email";
import makeGetPasswordResetByEmailAndCode from "./get-password-reset-by-email-and-code";
import makeHardDeletePasswordReset from "./hard-delete-passwrod-reset";

const createPasswordReset = makeCreatePasswordReset({ passwordResetDb });
const getPasswordResetByEmailAndCode = makeGetPasswordResetByEmailAndCode({
  passwordResetDb,
});
const hardDeletePasswordReset = makeHardDeletePasswordReset({
  passwordResetDb,
});

const getPasswordResetByCode = makeGetPasswordResetByCode({ passwordResetDb });

const getPasswordResetByEmail = makeGetPasswordResetByEmail({
  passwordResetDb,
});

const passwordResetServices = Object.freeze({
  createPasswordReset,
  getPasswordResetByEmailAndCode,
  hardDeletePasswordReset,
  getPasswordResetByCode,
  getPasswordResetByEmail,
});

export default passwordResetServices;

export {
  createPasswordReset,
  hardDeletePasswordReset,
  getPasswordResetByCode,
  getPasswordResetByEmail,
  getPasswordResetByEmailAndCode,
};
