import IPasswordReset from "@/database/interfaces/password-reset";

export default interface IPasswordResetDb {
  findByEmailAndCode: ({
    email,
    code,
  }: {
    email: string;
    code: string;
  }) => Promise<IPasswordReset>;
  findByCode: ({ code }: { code: string }) => Promise<IPasswordReset>;
  insert: (
    payload: Omit<IPasswordReset, "_id" | "created_at" | "updated_at">
  ) => Promise<IPasswordReset>;
  update: (payload: IPasswordReset) => Promise<IPasswordReset>;
  hardDelete: ({ _id }: { _id: string }) => Promise<IPasswordReset>;
}
