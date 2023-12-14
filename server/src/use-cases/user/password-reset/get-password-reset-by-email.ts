import IPasswordResetDb from "@/data-access/interfaces/password-reset-db";
import IPasswordReset from "@/database/interfaces/password-reset";

interface IPayload {
  email: string;
}

export type GetPasswordResetByEmail = ({
  email,
}: IPayload) => Promise<IPasswordReset>;

export default function makeGetPasswordResetByEmail({
  passwordResetDb,
}: {
  passwordResetDb: IPasswordResetDb;
}): GetPasswordResetByEmail {
  return async function getPasswordResetByEmail({
    email,
  }: IPayload): Promise<IPasswordReset> {
    return await passwordResetDb.findByEmail({ email });
  };
}
