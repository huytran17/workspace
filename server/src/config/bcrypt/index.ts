import bcrypt from "bcrypt";
import makeHashPassword from "./hash-password";
import makeVerifyPassword from "./verify-password";

const hashPassword = makeHashPassword({ bcrypt });
const verifyPassword = makeVerifyPassword({ bcrypt });

const bcrypt_services = Object.freeze({
  hashPassword,
  verifyPassword,
});

export default bcrypt_services;

export { hashPassword, verifyPassword };
