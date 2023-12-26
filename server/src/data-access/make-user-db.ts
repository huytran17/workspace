import User from "@/database/entities/user";
import IUser from "@/database/interfaces/user";
import { map } from "lodash";
import mongoose from "mongoose";
import IUserDb, { UserPayloadOmitProps } from "./interfaces/user-db";

export default function makeUserDb({
  userDbModel,
}: {
  userDbModel: mongoose.Model<
    IUser & mongoose.Document,
    Record<string, unknown>
  >;
}) {
  return new (class UserDb implements IUserDb {
    async findAll(): Promise<IUser[]> {
      try {
        const queryConditions = {
          deleted_at: null,
        };

        const users = await userDbModel
          .find(queryConditions)
          .lean({ virtual: true });

        if (users.length) {
          return map(users, (exists) => new User(exists));
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async findById({ _id }: { _id: string }): Promise<IUser> {
      try {
        const queryConditions = {
          _id,
          deleted_at: null,
        };

        const exists = await userDbModel
          .findOne(queryConditions)
          .lean({ virtual: true });

        if (exists) {
          return new User(exists);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async findByEmail({ email }: { email: string }): Promise<IUser> {
      try {
        const queryConditions = {
          email,
          deleted_at: null,
        };

        const exists = await userDbModel
          .findOne(queryConditions)
          .lean({ virtual: true });

        if (exists) {
          return new User(exists);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async insert(payload: Omit<IUser, UserPayloadOmitProps>): Promise<IUser> {
      try {
        const exists = await userDbModel.create(payload);
        if (exists) {
          return new User(exists);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async update(payload: Partial<IUser>): Promise<IUser> {
      try {
        const query_conditions = {
          deleted_at: null,
          ...payload,
        };

        const updated = await userDbModel
          .findOneAndUpdate(query_conditions)
          .lean({ virtual: true });

        if (updated) {
          return new User(updated);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async delete({ _id }: { _id: string }): Promise<IUser> {
      try {
        const payload = {
          _id,
          deleted_at: new Date(),
        };

        const deleted = await userDbModel
          .findByIdAndDelete(payload)
          .lean({ virtual: true });

        if (deleted) {
          return new User(deleted);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async hardDelete({ _id }: { _id: string }): Promise<IUser> {
      try {
        const deleted = await userDbModel
          .findOneAndDelete({ _id })
          .lean({ virtual: true });

        if (deleted) {
          return new User(deleted);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }
  })();
}
