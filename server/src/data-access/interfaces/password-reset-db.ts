import IPasswordReset from "@/database/interfaces/password-reset";

export type PayloadOmitProps = "_id" | "created_at" | "updated_at";

export default interface IPasswordResetDb {
  findByEmailAndCode: ({
    email,
    code,
  }: {
    email: string;
    code: string;
  }) => Promise<IPasswordReset>;
  findByCode: ({ code }: { code: number }) => Promise<IPasswordReset>;
  findByEmail: ({ email }: { email: string }) => Promise<IPasswordReset>;
  insert: (
    payload: Omit<IPasswordReset, PayloadOmitProps>
  ) => Promise<IPasswordReset>;
  update: (payload: IPasswordReset) => Promise<IPasswordReset>;
  hardDelete: ({ _id }: { _id: string }) => Promise<IPasswordReset>;
}
