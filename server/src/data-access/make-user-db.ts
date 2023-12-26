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
          return map(users, (user) => new User(user));
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

        const user = await userDbModel
          .findOne(queryConditions)
          .lean({ virtual: true });

        if (user) {
          return new User(user);
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

        const user = await userDbModel
          .findOne(queryConditions)
          .lean({ virtual: true });

        if (user) {
          return new User(user);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async insert(payload: Omit<IUser, UserPayloadOmitProps>): Promise<IUser> {
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

    async update(payload: Partial<IUser>): Promise<IUser> {
      try {
        const user = await userDbModel
          .findOneAndUpdate(payload)
          .lean({ virtual: true });

        if (user) {
          return new User(user);
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

        const user = await userDbModel
          .findByIdAndDelete(payload)
          .lean({ virtual: true });

        if (user) {
          return new User(user);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async hardDelete({ _id }: { _id: string }): Promise<IUser> {
      try {
        const user = await userDbModel
          .findOneAndDelete({ _id })
          .lean({ virtual: true });

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
