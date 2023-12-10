import { CreateAccessToken } from "@/config/access-token/create-access-token";
import { VerifyPassword } from "@/config/bcrypt/verify-password";
import { http_status } from "@/config/constants/http-status";
import { GetUserByEmail } from "@/use-cases/user/get-user-by-email";
import { get, isNil } from "lodash";

interface IPayload {
  email: string;
  password: string;
}

export default function makeLoginController({
  getUserByEmail,
  verifyPassword,
  createAccessToken,
}: {
  getUserByEmail: GetUserByEmail;
  verifyPassword: VerifyPassword;
  createAccessToken: CreateAccessToken;
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

      const jwt_payload = {
        _id: exists._id,
        email: exists.email,
      };
      const access_token = createAccessToken({ payload: jwt_payload });

      return {
        headers,
        statusCode: http_status.OK,
        body: { access_token },
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
