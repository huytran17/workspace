import Order from "@/database/entities/order";
import IOrder from "@/database/interfaces/order";
import mongoose from "mongoose";
import IOrderDb, {
  IOrderPagination,
  OrderPayloadOmitProps,
} from "./interfaces/order-db";

export default function makeOrderDb({
  orderDbModel,
}: {
  orderDbModel: mongoose.Model<
    IOrder & mongoose.Document,
    Record<string, unknown>
  >;
}) {
  return new (class OrderDb implements IOrderDb {
    async findByUserPaginated({
      user_id,
      page,
      entries_per_page,
    }: {
      user_id: string;
      page: number;
      entries_per_page: number;
    }): Promise<IOrderPagination> {
      try {
        const skip = page > 0 ? (page - 1) * entries_per_page : 0;

        const query_conditions = {
          customer: user_id,
          deleted_at: null,
        };

        const exists = await orderDbModel
          .find(query_conditions)
          .skip(skip)
          .limit(entries_per_page)
          .lean({ virtuals: true });

        if (!exists) {
          return null;
        }

        const total = await orderDbModel.countDocuments(query_conditions);

        const has_more = page > 0 ? page * entries_per_page < total : false;
        const from = page > 0 ? page : null;
        const to = has_more ? page + 1 : null;

        const data = exists.map((exists) => new Order(exists));

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
      payload: Omit<IOrder, OrderPayloadOmitProps>
    ): Promise<IOrder> {
      try {
        const exists = await orderDbModel.create(payload);

        if (exists) {
          return new Order(exists);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async update(payload: Partial<IOrder>): Promise<IOrder> {
      try {
        const query_conditions = {
          deleted_at: null,
          ...payload,
        };

        const updated = await orderDbModel
          .findOneAndUpdate(query_conditions)
          .lean({ virtuals: true });

        if (updated) {
          return new Order(updated);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async delete({ _id }: { _id: string }): Promise<IOrder> {
      try {
        const payload = {
          _id,
          deleted_at: new Date(),
        };

        const deleted = await orderDbModel
          .findOneAndUpdate(payload)
          .lean({ virtuals: true });

        if (deleted) {
          return new Order(deleted);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async hardDelete({ _id }: { _id: string }): Promise<IOrder> {
      try {
        const deleted = await orderDbModel
          .findOneAndDelete({ _id })
          .lean({ virtuals: true });

        if (deleted) {
          return new Order(deleted);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }
  })();
}
