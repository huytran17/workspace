import { http_status } from "@/config/constants/http-status";
import { GetUserByEmail } from "@/use-cases/user/get-user-by-email";
import { get, isNil } from "lodash";

interface IPayload {
  email: string;
}

export default function makeLogoutController({
  getUserByEmail,
}: {
  getUserByEmail: GetUserByEmail;
}) {
  return async function logoutController(httpRequest: { user: {} }) {
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const { email } = <IPayload>get(httpRequest, "user", {});

      const exists = await getUserByEmail({ email });
      if (isNil(exists)) {
        throw new Error(`User by id ${email} does not exists`);
      }

      return {
        headers,
        statusCode: http_status.OK,
        body: {
          success: true,
        },
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
