import OTPlib from "otplib";

export type GenerateOtp = () => string;

export default function makeGenerateOtp({
  otplib,
  secret,
}: {
  otplib: typeof OTPlib;
  secret: string;
}): GenerateOtp {
  return function generateOtp(): string {
    return otplib.authenticator.generate(secret);
  };
}
