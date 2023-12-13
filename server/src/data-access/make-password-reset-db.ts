import IPasswordReset from "@/database/interfaces/password-reset";
import mongoose from "mongoose";
import IPasswordResetDb from "./interfaces/password-reset-db";
import PasswordReset from "@/database/entities/password-reset";

export default function makePasswordResetDb({
  passwordResetDbModel,
}: {
  passwordResetDbModel: mongoose.Model<
    IPasswordReset & mongoose.Document,
    Record<string, unknown>
  >;
}) {
  return new (class PasswordResetDb implements IPasswordResetDb {
    async findByEmailAndCode({
      email,
      code,
    }: {
      email: string;
      code: string;
    }): Promise<IPasswordReset> {
      const query_conditions = { email, code };
      const exists = await passwordResetDbModel.findOne(query_conditions);

      if (exists) {
        return new PasswordReset(exists);
      }

      return null;
    }

    async insert(
      payload: Omit<IPasswordReset, "_id" | "created_at" | "updated_at">
    ): Promise<IPasswordReset> {
      const created = await passwordResetDbModel.create(payload);

      if (created) {
        return new PasswordReset(created);
      }

      return null;
    }

    async update(payload: IPasswordReset): Promise<IPasswordReset> {
      const updated = await passwordResetDbModel.findOneAndUpdate(payload);

      if (updated) {
        return new PasswordReset(updated);
      }

      return null;
    }

    async hardDelete({ _id }: { _id: string }): Promise<IPasswordReset> {
      const deleted = await passwordResetDbModel.findByIdAndDelete({ _id });

      if (deleted) {
        return new PasswordReset(deleted);
      }

      return null;
    }
  })();
}
