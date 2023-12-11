import { IEmailData } from "./get-email-content";
import { Mailer } from "./mailer";

export type SendMail = (payload: IEmailData) => void;

export default function makeSendMail({ mailer }: { mailer: Mailer }): SendMail {
  return async function sendMail(payload: IEmailData): Promise<void> {
    await mailer.sendMail(payload);
  };
}
