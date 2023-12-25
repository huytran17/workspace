import IOrderDb, { PayloadOmitProps } from "@/data-access/interfaces/order-db";
import IOrder from "@/database/interfaces/order";

export type CreateOrder = ({
  orderDetails,
}: {
  orderDetails: Omit<IOrder, PayloadOmitProps>;
}) => Promise<IOrder>;

export default function makeCreateOrder({
  orderDb,
}: {
  orderDb: IOrderDb;
}): CreateOrder {
  return async function createOrder({ orderDetails }) {
    return await orderDb.insert(orderDetails);
  };
}
