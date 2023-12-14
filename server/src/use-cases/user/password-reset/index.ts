import makeCreatePasswordReset from "./create-password-reset";
import makeGetPasswordResetByEmailAndCode from "./get-password-reset-by-email-and-code";
import makeHardDeletePasswordReset from "./hard-delete-passwrod-reset";
import { passwordResetDb } from "@/data-access";

const createPasswordReset = makeCreatePasswordReset({ passwordResetDb });
const getPasswordResetByEmailAndCode = makeGetPasswordResetByEmailAndCode({
  passwordResetDb,
});
const getHardDeletePasswordReset = makeHardDeletePasswordReset({
  passwordResetDb,
});

const passwordResetServices = Object.freeze({
  createPasswordReset,
  getPasswordResetByEmailAndCode,
  getHardDeletePasswordReset,
});

export default passwordResetServices;

export {
  createPasswordReset,
  getPasswordResetByEmailAndCode,
  getHardDeletePasswordReset,
};
