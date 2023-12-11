import OTPlib from "otplib";

export type VerifyOtp = (token: string) => boolean;

export default function makeVerifyOtp({
  otplib,
  secret,
}: {
  otplib: typeof OTPlib;
  secret: string;
}): VerifyOtp {
  return function verifyOtp(token: string): boolean {
    return otplib.authenticator.verify({ token, secret });
  };
}
