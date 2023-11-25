import { HashPassword } from "@/config/bcrypt/hash-password";
import { http_status } from "@/config/constants/http-status";
import IUser from "@/database/interfaces/user";
import { CreateUser } from "@/use-cases/user/create-user";
import { get } from "lodash";

export default function makeRegister({
  createUser,
  hashPassword,
}: {
  createUser: CreateUser;
  hashPassword: HashPassword;
}) {
  return async function register(httpRequest: Request & { validated: {} }) {
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const user_details = <IUser>get(httpRequest, "validated", {});

      const password = get(user_details, "password");
      const password_confirmation = get(user_details, "password_confirmation");

      if (password !== password_confirmation) {
        throw new Error("Password confirmation does not match");
      }

      const hashed_password = await hashPassword({
        password,
      });

      const final_user_details = {
        ...user_details,
        hash_password: hashed_password,
      };

      const user = await createUser({ userDetails: final_user_details });

      return {
        headers,
        status: http_status.CREATED,
        body: user,
      };
    } catch (error) {
      throw {
        headers,
        status: http_status.INTERNAL_SERVER_ERROR,
        error: error.message,
      };
    }
  };
}
