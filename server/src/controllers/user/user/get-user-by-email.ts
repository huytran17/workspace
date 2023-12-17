import { http_status } from "@/config/constants/http-status";
import { GetUserByEmail } from "@/use-cases/user/user/get-user-by-email";
import { get, isNil } from "lodash";

interface IPayload {
  email: string;
}

export default function makeGetUserByEmailController({
  getUserByEmail,
}: {
  getUserByEmail: GetUserByEmail;
}) {
  return async function getUserByEmailController(httpRequest: {
    validated: {};
  }) {
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const { email } = <IPayload>get(httpRequest, "validated", {});
      const exists = await getUserByEmail({ email });

      if (isNil(exists)) {
        throw new Error(`User by email ${email} does not exist.`);
      }

      return {
        headers,
        statusCode: http_status.OK,
        body: exists,
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
