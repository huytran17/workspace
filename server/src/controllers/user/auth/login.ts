import { VerifyPassword } from "@/config/bcrypt/verify-password";
import { http_status } from "@/config/constants/http-status";
import { GetUserByEmail } from "@/use-cases/user/get-user-by-email";
import { get, isNil, omit } from "lodash";

interface IPayload {
  email: string;
  password: string;
}

export default function makeLoginController({
  getUserByEmail,
  verifyPassword,
}: {
  getUserByEmail: GetUserByEmail;
  verifyPassword: VerifyPassword;
}) {
  return async function loginController(httpRequest: { validated: {} }) {
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const { email, password } = <IPayload>get(httpRequest, "validated", {});

      const exists = await getUserByEmail({ email });
      if (isNil(exists)) {
        throw new Error(`User by email ${email} does not exists`);
      }

      const verified = await verifyPassword({
        password,
        hashed_passwrod: exists.hash_password,
      });

      if (!verified) {
        throw new Error("Invalid password");
      }

      return {
        headers,
        statusCode: http_status.OK,
        body: omit(exists, ["hash_password"]),
      };
    } catch (error) {
      throw {
        headers,
        status: http_status.INTERNAL_SERVER_ERROR,
        body: error.message,
      };
    }
  };
}
