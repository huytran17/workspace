import { VerifyAccessToken } from "@/config/access-token/verify-access-token";
import { HashPassword } from "@/config/bcrypt/hash-password";
import { http_status } from "@/config/constants/http-status";
import { GetPasswordResetByEmailAndCode } from "@/use-cases/user/password-reset/get-password-reset-by-email-and-code";
import { GetUserByEmail } from "@/use-cases/user/user/get-user-by-email";
import { UpdateUser } from "@/use-cases/user/user/update-user";
import { JwtPayload } from "jsonwebtoken";
import { get, isNil } from "lodash";
import Moment from "moment";

interface IPayload {
  token: string;
  password: string;
  password_confirmation: string;
}

export default function makeResetPasswordController({
  getUserByEmail,
  getPasswordResetByEmailAndCode,
  updateUser,
  verifyAccessToken,
  hashPassword,
  moment,
}: {
  getUserByEmail: GetUserByEmail;
  getPasswordResetByEmailAndCode: GetPasswordResetByEmailAndCode;
  updateUser: UpdateUser;
  verifyAccessToken: VerifyAccessToken;
  hashPassword: HashPassword;
  moment: typeof Moment;
}) {
  return async function resetPasswordController(httpRequest: {
    validated: {};
  }) {
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const { token, password, password_confirmation } = <IPayload>(
        get(httpRequest, "validated", {})
      );

      const { email, code } = <JwtPayload>verifyAccessToken({ token });

      const user_exists = await getUserByEmail({ email });
      if (isNil(user_exists)) {
        throw new Error(`User by email ${email} does not exist.`);
      }

      const password_reset_exists = await getPasswordResetByEmailAndCode({
        email,
        code,
      });

      if (isNil(password_reset_exists)) {
        throw new Error("Invalid password reset information.");
      }

      const is_expired = moment(password_reset_exists.expires_at).isAfter(
        moment()
      );

      if (is_expired) {
        throw new Error("Password reset has been expired.");
      }

      if (password !== password_confirmation) {
        throw new Error("Password confirmation does not match.");
      }

      const hashed_password = await hashPassword({ password });
      const final_user = { ...user_exists, hash_password: hashed_password };
      const updated_user = await updateUser({ userDetails: final_user });

      return {
        headers,
        statusCode: http_status.OK,
        body: updated_user,
      };
    } catch (error) {
      throw {
        headers,
        statusCode: http_status.INTERNAL_SERVER_ERROR,
        body: error.message,
      };
    }
  };
}
