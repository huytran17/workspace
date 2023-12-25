import IOrderDb, { IOrderPagination } from "@/data-access/interfaces/order-db";
import { redis } from "@/config/redis";

interface IPayload {
  _id: string;
  page: number;
  entries_per_page: number;
}

export type GetOrdersByUserPaginated = ({
  _id,
  page,
  entries_per_page,
}: IPayload) => Promise<IOrderPagination>;

export default function makeGetOrdersByUserPaginated({
  orderDb,
}: {
  orderDb: IOrderDb;
}): GetOrdersByUserPaginated {
  return async function getOrdersByUserPaginated({
    _id,
    page,
    entries_per_page,
  }) {
    const redis_payload = {
      prefix: "getOrdersByUserPaginated",
      _id,
      page,
      entries_per_page,
    };

    const cache_key = redis.keyBuilder(redis_payload);

    const cached_data = await redis.retrieve({ key: cache_key });

    if (cached_data) {
      return cached_data;
    }

    const orders = await orderDb.findByUserPaginated({
      _id,
      page,
      entries_per_page,
    });

    const five_minutes_in_seconds = 5 * 60;

    await redis.save({
      key: cache_key,
      value: orders,
      ttl: five_minutes_in_seconds,
    });

    return orders;
  };
}
