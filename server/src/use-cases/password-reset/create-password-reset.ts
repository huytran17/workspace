import IPasswordResetDb, {
  PasswordResetPayloadOmitProps,
} from "@/data-access/interfaces/password-reset-db";
import IPasswordReset from "@/database/interfaces/password-reset";

interface IPayload {
  passwordResetDetails: Omit<IPasswordReset, PasswordResetPayloadOmitProps>;
}

export type CreatePasswordReset = ({
  passwordResetDetails,
}: IPayload) => Promise<IPasswordReset>;

export default function makeCreatePasswordReset({
  passwordResetDb,
}: {
  passwordResetDb: IPasswordResetDb;
}): CreatePasswordReset {
  return async function createPasswordReset({ passwordResetDetails }) {
    return await passwordResetDb.insert(passwordResetDetails);
  };
}
