import makeRegister from "./register";
import { createUser } from "@/use-cases/user";
import { hashPassword } from "@/config/bcrypt";

const register = makeRegister({
  createUser,
  hashPassword,
});

const authServices = Object.freeze({
  register,
});

export default authServices;

export { register };
