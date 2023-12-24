import IOrder from "@/database/interfaces/order";
import IOrderDb, { PayloadOmitProps } from "./interfaces/order-db";
import mongoose from "mongoose";
import Order from "@/database/entities/order";

export default function makeOrderDb({
  orderDbModel,
}: {
  orderDbModel: mongoose.Model<
    IOrder & mongoose.Document,
    Record<string, unknown>
  >;
}) {
  return new (class OrderDb implements IOrderDb {
    async insert(payload: Omit<IOrder, PayloadOmitProps>): Promise<IOrder> {
      try {
        const order = await orderDbModel.create(payload);

        if (order) {
          return new Order(order);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async update(payload: IOrder): Promise<IOrder> {
      try {
        const updated = await orderDbModel.findOneAndUpdate(payload);

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

        const deleted = await orderDbModel.findOneAndUpdate(payload);

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
        const deleted = await orderDbModel.findOneAndDelete({ _id });

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
