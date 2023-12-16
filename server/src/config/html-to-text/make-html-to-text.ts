import { convert } from "html-to-text";

const default_options = {};

export type HtmlToText = ({
  html,
  options,
}: {
  html: string;
  options?: object;
}) => string;

export default function makeConvertHtmlToText(): HtmlToText {
  return function convertHtmlToText({
    html,
    options = {},
  }: {
    html: string;
    options?: object;
  }) {
    return convert(html, { ...default_options, ...options });
  };
}
