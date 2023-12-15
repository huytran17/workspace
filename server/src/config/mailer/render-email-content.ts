import { IEmailData } from "./get-email-content";
import type { Mailer } from "./mailer";
import { GetEmailContent } from "./get-email-content";

interface IRenderEmailContent {
  content: IEmailData;
  data?: object;
}

export type RenderEmailContent = ({
  content,
  data,
}: IRenderEmailContent) => ReturnType<GetEmailContent>;

export default function makeRenderEmailContent({
  mailer,
  default_data,
}: {
  mailer: Mailer;
  default_data: object;
}): RenderEmailContent {
  return function renderEmailContent({
    content,
    data = {},
  }: IRenderEmailContent): ReturnType<GetEmailContent> {
    const final_data = { ...default_data, ...data };

    const rendered_subject = mailer.render({
      content: content.subject,
      data: final_data,
    });

    const rendered_text = mailer.render({
      content: content.text,
      data: final_data,
    });

    return { ...content, text: rendered_text, subject: rendered_subject };
  };
}
