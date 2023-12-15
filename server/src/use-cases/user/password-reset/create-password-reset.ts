import IPasswordResetDb from "@/data-access/interfaces/password-reset-db";
import IPasswordReset from "@/database/interfaces/password-reset";

type OmitProps = "_id" | "created_at" | "updated_at";

interface IPayload {
  passwordResetDetails: Omit<IPasswordReset, OmitProps>;
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
