import handlebars from "handlebars";
import nodemailer, { Transporter } from "nodemailer";
import { IEmailData } from "./get-email-content";

let transporter: Transporter | undefined | any;

const initializeNodemailer = (): Transporter => {
  if (transporter) {
    return transporter;
  }

  const is_valid_env =
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "production";

  if (!is_valid_env) {
    console.log(
      `SMTP is not initialized in ${process.env.NODE_ENV} environment.`
    );

    transporter = {
      sendMail: () => {
        console.log("SMTP is not available.");
      },
    };

    return transporter;
  }

  transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USERNAME,
      pass: process.env.MAILTRAP_PASSWORD,
    },
  });

  transporter.verify((error: any, success: any) => {
    if (error) {
      console.error(error);
    } else {
      console.log("SMTP server is ready to take your messages!");
    }
  });

  return transporter;
};

export type Mailer = {
  sendMail: (payload: IEmailData) => Promise<void>;
  render: ({ content, data }: { content: string; data: object }) => string;
};

export default Object.freeze({
  sendMail: async (payload: IEmailData): Promise<void> => {
    try {
      const transporter = initializeNodemailer();

      console.log(`Sending email to ${payload.to?.join(",")}...`);

      await transporter.sendMail(payload);

      console.log(`Sent email to ${payload.to?.join(",")}...`);
    } catch (error) {
      console.error(error);
    }
  },

  render: ({ content, data }: { content: string; data: object }): string => {
    try {
      const compiled_content = handlebars.compile(content);

      return compiled_content(data);
    } catch (error) {
      console.error(error);
    }
  },
});

export { initializeNodemailer };
