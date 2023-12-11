import { GetEmailContent } from "@/config/mailer/get-email-content";
import { RenderEmailContent } from "@/config/mailer/render-email-content";
import { SendMail } from "@/config/mailer/send-email";
import { GetUserByEmail } from "@/use-cases/user/get-user-by-email";

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
  }) {};
}
