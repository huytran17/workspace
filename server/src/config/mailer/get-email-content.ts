import { htmlToText } from "html-to-text";

export interface IEmailData {
  from: string;
  to: string[];
  subject: string;
  text: string;
  cc?: string[];
  bcc?: string[];
  sender?: string;
}

interface IGetEmailContent extends Omit<IEmailData, "text"> {
  type: string;
}

export type GetEmailContent = ({
  from,
  to,
  type,
  cc,
  bcc,
  sender,
}: IGetEmailContent) => Omit<IEmailData, "sender">;

export default function makeGetEmailContent({
  templates,
  subjects,
  default_sender,
}: {
  templates: object;
  subjects: object;
  default_sender: string;
}): GetEmailContent {
  return function getEmailContent({
    from,
    to,
    type,
    cc = [],
    bcc = [],
    sender = "",
  }: IGetEmailContent) {
    const is_valid_receivers = !to || to.length;
    if (!is_valid_receivers) {
      console.log("Can not find any recipients to send email.");
      return;
    }

    const subject = subjects[type];
    const template = templates[type];

    const text_template = htmlToText(template);

    return Object.freeze({
      from: sender || default_sender,
      to,
      subject,
      text: text_template,
      html: template,
      cc,
      bcc,
    });
  };
}
