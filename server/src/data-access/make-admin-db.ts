import mongoose from "mongoose";
import IAdminDb, {
  AdminPayloadOmitProps,
  IAdminPagination,
} from "./interfaces/admin-db";
import IAdmin from "@/database/interfaces/admin";
import Admin from "@/database/entities/admin";

export default function makeAdminDb({
  adminDbModel,
}: {
  adminDbModel: mongoose.Model<
    IAdmin & mongoose.Document,
    Record<string, unknown>
  >;
}) {
  return new (class AdminDb implements IAdminDb {
    async findAllPaginated({
      query,
      page,
      entries_per_page,
    }: {
      query: string;
      page: number;
      entries_per_page: number;
    }): Promise<IAdminPagination> {
      try {
        const skip = page > 0 ? (page - 1) * entries_per_page : 0;

        const query_conditions = {
          deleted_at: null,
        };

        if (query) {
          query_conditions["$and"] = [
            {
              $or: [
                {
                  fullname: { $regex: `.*${query}.*`, $options: "si" },
                },
              ],
            },
          ];
        }

        const exists = await adminDbModel
          .find(query_conditions)
          .skip(skip)
          .limit(entries_per_page)
          .lean({ virtuals: true });

        if (!exists) {
          return null;
        }

        const total = await adminDbModel.countDocuments(query_conditions);

        const has_more = page > 0 ? page * entries_per_page < total : false;
        const from = page > 0 ? page : null;
        const to = has_more ? page + 1 : null;

        const data = exists.map((order) => new Admin(order));

        return {
          pagination: {
            from,
            to,
            page,
            entries_per_page,
            total,
          },
          data,
        };
      } catch (error) {
        console.error(error);
      }
    }

    async findById({ _id }: { _id: string }): Promise<IAdmin> {
      try {
        const query_conditions = {
          _id,
          deleted_at: null,
        };

        const exists = await adminDbModel
          .findOne(query_conditions)
          .lean({ virtuals: true });

        if (exists) {
          return new Admin(exists);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async findByEmail({ email }: { email: string }): Promise<IAdmin> {
      try {
        const query_conditions = {
          email,
          deleted_at: null,
        };

        const exists = await adminDbModel
          .findOne(query_conditions)
          .lean({ virtuals: true });

        if (exists) {
          return new Admin(exists);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async insert(
      payload: Omit<IAdmin, AdminPayloadOmitProps>
    ): Promise<IAdmin> {
      try {
        const created = await adminDbModel.create(payload);

        if (created) {
          return new Admin(created);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async update(payload: Partial<IAdmin>): Promise<IAdmin> {
      try {
        const updated = await adminDbModel
          .findOneAndUpdate(payload)
          .lean({ virtuals: true });

        if (updated) {
          return new Admin(updated);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async delete({ _id }: { _id: string }): Promise<IAdmin> {
      try {
        const payload = {
          _id,
          deleted_at: new Date(),
        };

        const deleted = await adminDbModel
          .findOneAndUpdate(payload)
          .lean({ virtuals: true });

        if (deleted) {
          return new Admin(deleted);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async hardDelete({ _id }: { _id: string }): Promise<IAdmin> {
      try {
        const deleted = await adminDbModel
          .findOneAndDelete({ _id })
          .lean({ virtuals: true });

        if (deleted) {
          return new Admin(deleted);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }
  })();
}
