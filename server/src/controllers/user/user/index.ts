import makeGetUserByEmailController from "./get-user-by-email";
import { getUserByEmail } from "@/use-cases/user/user";

const getUserByEmailController = makeGetUserByEmailController({
  getUserByEmail,
});

const userServices = Object.freeze({
  getUserByEmailController,
});

export default userServices;

export { getUserByEmailController };
