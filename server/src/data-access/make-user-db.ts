import User from "@/database/entities/user";
import IUser from "@/database/interfaces/user";
import { map } from "lodash";
import mongoose from "mongoose";
import IUserDb from "./interfaces/user-db";

export default function makeUserDb({
  userDbModel,
}: {
  userDbModel: mongoose.Model<
    IUser & mongoose.Document,
    Record<string, unknown>
  >;
}) {
  return new (class UserDb implements IUserDb {
    async findAll() {
      try {
        const queryConditions = {
          deleted_at: null,
        };

        const users = await userDbModel.find(queryConditions);
        if (users.length) {
          return map(users, (user) => new User(user));
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async findById({ _id }: { _id: string }) {
      try {
        const queryConditions = {
          _id,
          deleted_at: null,
        };

        const user = await userDbModel.findOne(queryConditions);
        if (user) {
          return new User(user);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async findByEmail({ email }: { email: string }) {
      try {
        const queryConditions = {
          email,
          deleted_at: null,
        };

        const user = await userDbModel.findOne(queryConditions);
        if (user) {
          return new User(user);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async insert(
      payload: Omit<IUser, "_id" | "created_at" | "updated_at" | "deleted_at">
    ) {
      try {
        const user = await userDbModel.create(payload);
        if (user) {
          return new User(user);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async update(payload: IUser) {
      try {
        const user = await userDbModel.findOneAndUpdate(payload);
        if (user) {
          return new User(user);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async delete({ _id }: { _id: string }) {
      try {
        const user = await userDbModel.findByIdAndDelete({ _id });
        if (user) {
          return new User(user);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async hardDelete({ _id }: { _id: string }) {
      try {
        const user = await userDbModel.findOneAndUpdate({ _id });
        if (user) {
          return new User(user);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }
  })();
}
