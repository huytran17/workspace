import bcrypt from "bcrypt";
import makeHashPassword from "./hash-password";
import makeVerifyPassword from "./verify-password";

const hashPassword = makeHashPassword({ bcrypt });
const verifyPassword = makeVerifyPassword({ bcrypt });

const bcryptServices = Object.freeze({
  hashPassword,
  verifyPassword,
});

export default bcryptServices;

export { hashPassword, verifyPassword };
