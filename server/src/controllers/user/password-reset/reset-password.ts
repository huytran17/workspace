import { VerifyAccessToken } from "@/config/access-token/verify-access-token";
import { HashPassword } from "@/config/bcrypt/hash-password";
import { http_status } from "@/config/constants/http-status";
import { GetPasswordResetByEmailAndCode } from "@/use-cases/password-reset/get-password-reset-by-email-and-code";
import { HardDeletePasswordReset } from "@/use-cases/password-reset/hard-delete-passwrod-reset";
import { GetUserByEmail } from "@/use-cases/user/get-user-by-email";
import { UpdateUser } from "@/use-cases/user/update-user";
import { JwtPayload } from "jsonwebtoken";
import { get, isNil } from "lodash";

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
  hardDeletePasswordReset,
}: {
  getUserByEmail: GetUserByEmail;
  getPasswordResetByEmailAndCode: GetPasswordResetByEmailAndCode;
  updateUser: UpdateUser;
  verifyAccessToken: VerifyAccessToken;
  hashPassword: HashPassword;
  hardDeletePasswordReset: HardDeletePasswordReset;
}) {
  return async function resetPasswordController(httpRequest: {
    validated: {};
  }) {
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const { token, password } = <IPayload>get(httpRequest, "validated", {});

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

      const hashed_password = await hashPassword({ password });
      const final_user = { ...user_exists, hash_password: hashed_password };

      const [updated_user] = await Promise.all([
        updateUser({ userDetails: final_user }),
        hardDeletePasswordReset({ _id: password_reset_exists._id }),
      ]);

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
