import makeGetEmailContent from "./get-email-content";
import mailer from "./mailer";
import makeRenderEmailContent from "./render-email-content";
import makeSendMail from "./send-email";
import { default_data, subjects, templates } from "./templates";

const getEmailContent = makeGetEmailContent({
  templates,
  subjects,
  default_sender: process.env.MAIL_SENDER,
  default_from: process.env.MAIL_FROM,
});

const renderEmailContent = makeRenderEmailContent({
  mailer,
  default_data,
});

const sendMail = makeSendMail({
  mailer,
});

const mailServices = Object.freeze({
  getEmailContent,
  renderEmailContent,
  sendMail,
});

export default mailServices;

export { getEmailContent, renderEmailContent, sendMail };
