import { passwordResetDb } from "@/data-access";
import makeCreatePasswordReset from "./create-password-reset";
import makeGetPasswordResetByCode from "./get-password-reset-by-code";
import makeGetPasswordResetByEmailAndCode from "./get-password-reset-by-email-and-code";
import makeHardDeletePasswordReset from "./hard-delete-passwrod-reset";

const createPasswordReset = makeCreatePasswordReset({ passwordResetDb });
const getPasswordResetByEmailAndCode = makeGetPasswordResetByEmailAndCode({
  passwordResetDb,
});
const getHardDeletePasswordReset = makeHardDeletePasswordReset({
  passwordResetDb,
});

const getPasswordResetByCode = makeGetPasswordResetByCode({ passwordResetDb });

const passwordResetServices = Object.freeze({
  createPasswordReset,
  getPasswordResetByEmailAndCode,
  getHardDeletePasswordReset,
  getPasswordResetByCode,
});

export default passwordResetServices;

export {
  createPasswordReset,
  getHardDeletePasswordReset,
  getPasswordResetByCode,
  getPasswordResetByEmailAndCode,
};
