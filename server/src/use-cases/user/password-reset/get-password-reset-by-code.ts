import IPasswordResetDb from "@/data-access/interfaces/password-reset-db";
import IPasswordReset from "@/database/interfaces/password-reset";

interface IPayload {
  code: string;
}

export type GetPasswordResetByCode = ({
  code,
}: IPayload) => Promise<IPasswordReset>;

export default function makeGetPasswordResetByCode({
  passwordResetDb,
}: {
  passwordResetDb: IPasswordResetDb;
}): GetPasswordResetByCode {
  return async function getPasswordResetByCode({
    code,
  }: IPayload): Promise<IPasswordReset> {
    return await passwordResetDb.findByCode({ code });
  };
}
