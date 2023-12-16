import { convertHtmlToText } from "../html-to-text";

export interface IEmailData {
  from?: string;
  to: string[];
  subject?: string;
  text?: string;
  html?: string;
  cc?: string[];
  bcc?: string[];
}

export interface IGetEmailContent extends Omit<IEmailData, "text" | "html"> {
  type: string;
}

export type GetEmailContent = ({
  from,
  to,
  type,
  cc,
  bcc,
}: IGetEmailContent) => IEmailData;

export default function makeGetEmailContent({
  templates,
  subjects,
  default_sender,
  default_from,
}: {
  templates: object;
  subjects: object;
  default_sender: string;
  default_from: string;
}): GetEmailContent {
  return function getEmailContent({
    from,
    to = [],
    type,
    cc = [],
    bcc = [],
  }: IGetEmailContent): IEmailData {
    const is_valid_receivers = !to || to.length;
    if (!is_valid_receivers) {
      console.log("Can not find any recipients to send email.");
      return;
    }

    const subject = subjects[type];
    const template = templates[type];

    const text_template = convertHtmlToText({ html: template });
    const final_from = from || default_from;

    return Object.freeze({
      from: `${default_sender} ${final_from}`,
      to,
      subject,
      text: text_template,
      html: template,
      cc,
      bcc,
    });
  };
}
