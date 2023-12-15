import { CreateAccessToken } from "@/config/access-token/create-access-token";
import { http_status } from "@/config/constants/http-status";
import { GetEmailContent } from "@/config/mailer/get-email-content";
import { RenderEmailContent } from "@/config/mailer/render-email-content";
import { SendMail } from "@/config/mailer/send-email";
import { GenerateOtp } from "@/config/otp-generator/make-generate-otp";
import IPasswordReset from "@/database/interfaces/password-reset";
import { CreatePasswordReset } from "@/use-cases/user/password-reset/create-password-reset";
import { GetPasswordResetByCode } from "@/use-cases/user/password-reset/get-password-reset-by-code";
import { GetPasswordResetByEmail } from "@/use-cases/user/password-reset/get-password-reset-by-email";
import { HardDeletePasswordReset } from "@/use-cases/user/password-reset/hard-delete-passwrod-reset";
import { GetUserByEmail } from "@/use-cases/user/user/get-user-by-email";
import { get, isNil } from "lodash";
import Moment from "moment";

interface IPayload {
  email: string;
}

export default function makeSendPasswordResetEmailController({
  getUserByEmail,
  getPasswordResetByEmail,
  getPasswordResetByCode,
  hardDeletePasswordReset,
  generateOtp,
  createAccessToken,
  createPasswordReset,
  getEmailContent,
  renderEmailContent,
  sendMail,
  moment,
  DASHBOARD_URL,
}: {
  getUserByEmail: GetUserByEmail;
  getPasswordResetByEmail: GetPasswordResetByEmail;
  getPasswordResetByCode: GetPasswordResetByCode;
  hardDeletePasswordReset: HardDeletePasswordReset;
  generateOtp: GenerateOtp;
  createAccessToken: CreateAccessToken;
  createPasswordReset: CreatePasswordReset;
  getEmailContent: GetEmailContent;
  renderEmailContent: RenderEmailContent;
  sendMail: SendMail;
  moment: typeof Moment;
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
        otp = <number>generateOtp();
        exists_by_code = await getPasswordResetByCode({ code: otp });
      } while (!isNil(exists_by_code));

      const expires_at = moment().add(5, "m").toDate();
      const password_reset_payload = { email, code: otp, expires_at };

      await createPasswordReset({
        passwordResetDetails: password_reset_payload,
      });

      const jwt_token = createAccessToken({
        payload: { email, otp },
        options: { expiresIn: "5m" },
      });

      const email_content = getEmailContent({
        to: [email],
        type: "reset-password",
      });

      const reset_password_url = `${DASHBOARD_URL}/auth/reset-password?token=${jwt_token}`;
      const rendered_email_content = renderEmailContent({
        content: email_content,
        data: { reset_password_url },
      });

      sendMail(rendered_email_content);
    } catch (error) {
      throw {
        headers,
        statusCode: http_status.INTERNAL_SERVER_ERROR,
        body: error.message,
      };
    }
  };
}
