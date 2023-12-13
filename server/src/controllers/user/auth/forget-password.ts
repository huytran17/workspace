import { http_status } from "@/config/constants/http-status";
import { GetEmailContent } from "@/config/mailer/get-email-content";
import { RenderEmailContent } from "@/config/mailer/render-email-content";
import { SendMail } from "@/config/mailer/send-email";
import { GetUserByEmail } from "@/use-cases/user/user/get-user-by-email";
import { get, isNil } from "lodash";

interface IPayload {
  email: string;
}

export default function makeForgetPasswordController({
  getUserByEmail,
  getEmailContent,
  renderEmailContent,
  sendMail,
}: {
  getUserByEmail: GetUserByEmail;
  getEmailContent: GetEmailContent;
  renderEmailContent: RenderEmailContent;
  sendMail: SendMail;
}) {
  return async function forgetPasswordController(httpRequest: {
    validated: {};
  }) {
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const { email } = <IPayload>get(httpRequest, "validated", {});

      const exists = await getUserByEmail({ email });
      if (isNil(exists)) {
        throw new Error(`User by email ${email} does not exists`);
      }
    } catch (error) {
      throw {
        headers,
        statusCode: http_status.INTERNAL_SERVER_ERROR,
        body: error.message,
      };
    }
  };
}
