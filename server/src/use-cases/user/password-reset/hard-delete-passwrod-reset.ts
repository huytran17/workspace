import IPasswordResetDb from "@/data-access/interfaces/password-reset-db";
import IPasswordReset from "@/database/interfaces/password-reset";

interface IPayload {
  _id: string;
}

export type HardDeletePasswordReset = ({
  _id,
}: IPayload) => Promise<IPasswordReset>;

export default function makeHardDeletePasswordReset({
  passwordResetDb,
}: {
  passwordResetDb: IPasswordResetDb;
}): HardDeletePasswordReset {
  return async function getHardDeletePasswordReset({ _id }: IPayload) {
    return await passwordResetDb.hardDelete({ _id });
  };
}
