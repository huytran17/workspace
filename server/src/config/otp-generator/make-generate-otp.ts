import { isNumber } from "lodash";
import otpGenerator from "otp-generator";

interface IPayload {
  length?: number;
  options?: { [key: string]: string };
}

export type GenerateOtp = ({ length, options }?: IPayload) => string | number;

const default_options = {
  digits: false,
};

export default function makeGenerateOtp(): GenerateOtp {
  return function generateOtp({
    length = 6,
    options = {},
  }: IPayload): string | number {
    const final_options = { ...default_options, ...options };
    const otp = otpGenerator.generate(length, final_options);

    if (isNumber(final_options.digits)) {
      return Number(otp);
    }

    return otp;
  };
}
