import IOrder from "@/database/interfaces/order";

export type PayloadOmitProps =
  | "_id"
  | "created_at"
  | "updated_at"
  | "deleted_at";

export interface IOrderPagination {
  pagination: {
    from: number;
    to: number;
    page: number;
    entries_per_page: number;
    total: number;
  };
  data: IOrder[];
}

export default interface IOrderDb {
  findByUserPaginated: ({
    _id,
    page,
    entries_per_page,
  }: {
    _id: string;
    page: number;
    entries_per_page: number;
  }) => Promise<IOrderPagination>;
  insert: (payload: Omit<IOrder, PayloadOmitProps>) => Promise<IOrder>;
  update: (payload: IOrder) => Promise<IOrder>;
  delete: ({ _id }: { _id: string }) => Promise<IOrder>;
  hardDelete: ({ _id }: { _id: string }) => Promise<IOrder>;
}
