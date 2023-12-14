import { http_status } from "@/config/constants/http-status";
import { GenerateOtp } from "@/config/otp-generator/make-generate-otp";
import IPasswordReset from "@/database/interfaces/password-reset";
import { CreatePasswordReset } from "@/use-cases/user/password-reset/create-password-reset";
import { GetPasswordResetByCode } from "@/use-cases/user/password-reset/get-password-reset-by-code";
import { GetPasswordResetByEmail } from "@/use-cases/user/password-reset/get-password-reset-by-email";
import { HardDeletePasswordReset } from "@/use-cases/user/password-reset/hard-delete-passwrod-reset";
import { get, isNil } from "lodash";
import Moment from "moment";

type OmitProps = "_id" | "code" | "created_at" | "updated_at";

interface IPayload extends Omit<IPasswordReset, OmitProps> {}

export default function makeCreatePasswordResetController({
  getPasswordResetByEmail,
  getPasswordResetByCode,
  createPasswordReset,
  hardDeletePasswordReset,
  generateOtp,
  moment,
}: {
  getPasswordResetByEmail: GetPasswordResetByEmail;
  getPasswordResetByCode: GetPasswordResetByCode;
  createPasswordReset: CreatePasswordReset;
  hardDeletePasswordReset: HardDeletePasswordReset;
  generateOtp: GenerateOtp;
  moment: typeof Moment;
}) {
  return async function createPasswordResetController(httpRequest: {
    validated: {};
  }) {
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const { email } = <IPayload>get(httpRequest, "validated", {});

      const exists = await getPasswordResetByEmail({ email });
      exists && (await hardDeletePasswordReset({ _id: exists._id }));

      let otp: number, exists_by_code: IPasswordReset;
      do {
        otp = <number>generateOtp();
        exists_by_code = await getPasswordResetByCode({ code: otp });
      } while (!isNil(exists_by_code));

      const expires_at = moment().add(5, "m").toDate();
      const passwordResetDetails = { email, code: otp, expires_at };
      const password_reset = await createPasswordReset({
        passwordResetDetails,
      });

      return {
        headers,
        statusCode: http_status.OK,
        body: password_reset,
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
