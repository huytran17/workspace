import type { Mailer } from "./mailer";

interface IRenderEmailContent {
  content: string;
  data: object;
}

export type RenderEmailContent = ({
  content,
  data,
}: IRenderEmailContent) => string;

export default function makeRenderEmailContent({
  mailer,
  default_data,
}: {
  mailer: Mailer;
  default_data: object;
}): RenderEmailContent {
  return function renderEmailContent({ content, data }: IRenderEmailContent) {
    const final_data = { ...default_data, ...data };
    return mailer.render({ content, data: final_data });
  };
}
