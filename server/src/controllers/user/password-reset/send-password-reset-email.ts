import { CreateAccessToken } from "@/config/access-token/create-access-token";
import { http_status } from "@/config/constants/http-status";
import { GetEmailContent } from "@/config/mailer/get-email-content";
import { RenderEmailContent } from "@/config/mailer/render-email-content";
import { SendMail } from "@/config/mailer/send-email";
import { GenerateRandomString } from "@/config/randomstring/make-generate-random-string";
import IPasswordReset from "@/database/interfaces/password-reset";
import { CreatePasswordReset } from "@/use-cases/user/password-reset/create-password-reset";
import { GetPasswordResetByCode } from "@/use-cases/user/password-reset/get-password-reset-by-code";
import { GetPasswordResetByEmail } from "@/use-cases/user/password-reset/get-password-reset-by-email";
import { HardDeletePasswordReset } from "@/use-cases/user/password-reset/hard-delete-passwrod-reset";
import { GetUserByEmail } from "@/use-cases/user/user/get-user-by-email";
import { get, isNil } from "lodash";

interface IPayload {
  email: string;
}

export default function makeSendPasswordResetEmailController({
  getUserByEmail,
  getPasswordResetByEmail,
  getPasswordResetByCode,
  hardDeletePasswordReset,
  generateRandomString,
  createAccessToken,
  createPasswordReset,
  getEmailContent,
  renderEmailContent,
  sendMail,
  DASHBOARD_URL,
}: {
  getUserByEmail: GetUserByEmail;
  getPasswordResetByEmail: GetPasswordResetByEmail;
  getPasswordResetByCode: GetPasswordResetByCode;
  hardDeletePasswordReset: HardDeletePasswordReset;
  generateRandomString: GenerateRandomString;
  createAccessToken: CreateAccessToken;
  createPasswordReset: CreatePasswordReset;
  getEmailContent: GetEmailContent;
  renderEmailContent: RenderEmailContent;
  sendMail: SendMail;
  DASHBOARD_URL: string;
}) {
  return async function sendPasswordResetEmailController(httpRequest: {
    validated: {};
  }) {
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const { email } = <IPayload>get(httpRequest, "validated", {});

      const user_exists = await getUserByEmail({ email });
      if (isNil(user_exists)) {
        throw new Error(`User by email ${email} does not exist.`);
      }

      const password_reset_exists = await getPasswordResetByEmail({ email });
      password_reset_exists &&
        (await hardDeletePasswordReset({ _id: password_reset_exists._id }));

      let otp: number, exists_by_code: IPasswordReset;
      do {
        otp = <number>generateRandomString({ charset: "numeric", length: 6 });

        exists_by_code = await getPasswordResetByCode({ code: otp });
      } while (!isNil(exists_by_code));

      const password_reset_payload = { email, code: otp };

      await createPasswordReset({
        passwordResetDetails: password_reset_payload,
      });

      const jwt_token = createAccessToken({
        payload: { email, code: otp },
        options: { expiresIn: "5m" },
      });

      const email_content = getEmailContent({
        to: [email],
        type: "forget-password",
      });

      const reset_password_url = `${DASHBOARD_URL}/auth/reset-password?token=${jwt_token}`;
      const rendered_email_content = renderEmailContent({
        content: email_content,
        data: { reset_password_url },
      });

      await sendMail(rendered_email_content);

      return {
        headers,
        statusCode: http_status.OK,
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
