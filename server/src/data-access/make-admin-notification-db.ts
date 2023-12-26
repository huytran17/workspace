import IAdminNotification from "@/database/interfaces/admin-notification";
import mongoose from "mongoose";
import IAdminNotificationDb, {
  AdminNotificationPayloadOmitProps,
} from "./interfaces/admin-notification-db";
import AdminNotification from "@/database/entities/admin-notification";

export default function makeAdminNotificationDb({
  adminNotificationDbModel,
}: {
  adminNotificationDbModel: mongoose.Model<
    IAdminNotification & mongoose.Document,
    Record<string, unknown>
  >;
}) {
  return new (class AdminNotificationDb implements IAdminNotificationDb {
    async findByAdminPaginated({
      _id,
      page,
      entries_per_page,
    }: {
      _id: string;
      page: number;
      entries_per_page: number;
    }) {
      try {
        const skip = page > 0 ? (page - 1) * entries_per_page : 0;

        const query_conditions = {
          deleted_at: null,
        };

        const exists = await adminNotificationDbModel
          .find(query_conditions)
          .skip(skip)
          .limit(entries_per_page)
          .lean({ virtuals: true });

        if (!exists) {
          return null;
        }

        const total = await adminNotificationDbModel.countDocuments(
          query_conditions
        );

        const has_more = page > 0 ? page * entries_per_page < total : false;
        const from = page > 0 ? page : null;
        const to = has_more ? page + 1 : null;

        const data = exists.map((item) => new AdminNotification(item));

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

    async insert(
      payload: Omit<IAdminNotification, AdminNotificationPayloadOmitProps>
    ): Promise<IAdminNotification> {
      try {
        const created = await adminNotificationDbModel.create(payload);

        if (created) {
          return new AdminNotification(created);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async update(
      payload: Partial<IAdminNotification>
    ): Promise<IAdminNotification> {
      try {
        const query_conditions = {
          deleted_at: null,
          ...payload,
        };

        const updated = await adminNotificationDbModel
          .findOneAndUpdate(query_conditions)
          .lean({ virtuals: true });

        if (updated) {
          return new AdminNotification(updated);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async delete({ _id }: { _id: string }): Promise<IAdminNotification> {
      try {
        const payload = {
          _id,
          deleted_at: new Date(),
        };

        const deleted = await adminNotificationDbModel
          .findByIdAndUpdate(payload)
          .lean({ virtuals: true });

        if (deleted) {
          return new AdminNotification(deleted);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async hardDelete({ _id }: { _id: string }): Promise<IAdminNotification> {
      try {
        const deleted = await adminNotificationDbModel
          .findByIdAndDelete({
            _id,
          })
          .lean({ virtuals: true });

        if (deleted) {
          return new AdminNotification(deleted);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }
  })();
}
