import OTPlib from "otplib";

interface IPayload {
  options: { [key: string]: string };
}

export type GenerateOtp = ({ options }?: IPayload) => string;

const default_options = {
  digits: 6,
};

export default function makeGenerateOtp({
  otplib,
  secret,
}: {
  otplib: typeof OTPlib;
  secret: string;
}): GenerateOtp {
  return function generateOtp({ options = {} }: IPayload): string {
    const authenticator = otplib.authenticator;
    authenticator.options = { ...default_options, ...options };

    return authenticator.generate(secret);
  };
}
