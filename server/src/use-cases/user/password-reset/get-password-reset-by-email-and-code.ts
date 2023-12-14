import IPasswordResetDb from "@/data-access/interfaces/password-reset-db";
import IPasswordReset from "@/database/interfaces/password-reset";

interface IPayload {
  email: string;
  code: string;
}

export type GetPasswordResetByEmailAndCode = ({
  email,
  code,
}: IPayload) => Promise<IPasswordReset>;

export default function makeGetPasswordResetByEmailAndCode({
  passwordResetDb,
}: {
  passwordResetDb: IPasswordResetDb;
}): GetPasswordResetByEmailAndCode {
  return async function getPasswordResetByEmailAndCode({
    email,
    code,
  }: IPayload): Promise<IPasswordReset> {
    return await passwordResetDb.findByEmailAndCode({ email, code });
  };
}
