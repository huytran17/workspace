import IOrderDb from "@/data-access/interfaces/order-db";
import IOrder from "@/database/interfaces/order";

export type DeleteOrder = ({ _id }: { _id: string }) => Promise<IOrder>;

export default function makeDeleteOrder({
  orderDb,
}: {
  orderDb: IOrderDb;
}): DeleteOrder {
  return async function deleteOrder({ _id }) {
    return await orderDb.delete({ _id });
  };
}
