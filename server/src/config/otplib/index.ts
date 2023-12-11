import otplib from "otplib";
import makeGenerateOtp from "./make-generate-otp";
import makeVerifyOtp from "./make-verify-otp";

const generateOtp = makeGenerateOtp({ otplib, secret: process.env.OTP_SECRET });
const verifyOtp = makeVerifyOtp({ otplib, secret: process.env.OTP_SECRET });

const otpServices = Object.freeze({
  generateOtp,
  verifyOtp,
});

export default otpServices;

export { generateOtp, verifyOtp };
