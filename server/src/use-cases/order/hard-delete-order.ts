import IOrderDb from "@/data-access/interfaces/order-db";
import IOrder from "@/database/interfaces/order";

export type HardDeleteOrder = ({ _id }: { _id: string }) => Promise<IOrder>;

export default function makeHardDeleteOrder({
  orderDb,
}: {
  orderDb: IOrderDb;
}): HardDeleteOrder {
  return async function hardDeleteOrder({ _id }) {
    return await orderDb.hardDelete({ _id });
  };
}
