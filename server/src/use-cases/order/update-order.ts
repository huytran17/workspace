import IOrderDb from "@/data-access/interfaces/order-db";
import IOrder from "@/database/interfaces/order";

export type UpdateOrder = ({
  orderDetails,
}: {
  orderDetails: Partial<IOrder>;
}) => Promise<IOrder>;

export default function makeUpdateOrder({
  orderDb,
}: {
  orderDb: IOrderDb;
}): UpdateOrder {
  return async function updateOrder({ orderDetails }) {
    return await orderDb.update(orderDetails);
  };
}
