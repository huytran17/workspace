import IOrder from "@/database/interfaces/order";

export type OrderPayloadOmitProps =
  | "_id"
  | "created_at"
  | "updated_at"
  | "deleted_at";

export interface IOrderPagination extends IPagination<IOrder> {}

export default interface IOrderDb {
  findByUserPaginated: ({
    user_id,
    page,
    entries_per_page,
  }: {
    user_id: string;
    page: number;
    entries_per_page: number;
  }) => Promise<IOrderPagination>;
  insert: (payload: Omit<IOrder, OrderPayloadOmitProps>) => Promise<IOrder>;
  update: (payload: Partial<IOrder>) => Promise<IOrder>;
  delete: ({ _id }: { _id: string }) => Promise<IOrder>;
  hardDelete: ({ _id }: { _id: string }) => Promise<IOrder>;
}
