import { HashPassword } from "@/config/bcrypt/hash-password";
import { http_status } from "@/config/constants/http-status";
import IUser from "@/database/interfaces/user";
import { CreateUser } from "@/use-cases/user/create-user";
import { GetUserByEmail } from "@/use-cases/user/get-user-by-email";
import { get, isNil, omit } from "lodash";

type OmitProps =
  | "_id"
  | "hash_password"
  | "created_at"
  | "updated_at"
  | "deleted_at";

interface IPayload extends Omit<IUser, OmitProps> {
  password_confirmation: string;
}

export default function makeRegisterController({
  createUser,
  getUserByEmail,
  hashPassword,
}: {
  createUser: CreateUser;
  hashPassword: HashPassword;
  getUserByEmail: GetUserByEmail;
}) {
  return async function registerController(
    httpRequest: Request & { validated: {} }
  ) {
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const user_details = <IPayload>get(httpRequest, "validated", {});

      const email = get(user_details, "email");

      const exists = await getUserByEmail({ email });
      if (!isNil(exists)) {
        throw new Error(`User by email ${exists.email} already exists`);
      }

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
        statusCode: http_status.CREATED,
        body: {},
      };
    } catch (error) {
      throw {
        headers,
        statusCode: http_status.INTERNAL_SERVER_ERROR,
        body: error.message,
      };
    }
  };
}
