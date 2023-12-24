import IOrder from "@/database/interfaces/order";

export type PayloadOmitProps =
  | "_id"
  | "created_at"
  | "updated_at"
  | "deleted_at";

export default interface IOrderDb {
  insert: (payload: Omit<IOrder, PayloadOmitProps>) => Promise<IOrder>;
  update: (payload: IOrder) => Promise<IOrder>;
  delete: ({ _id }: { _id: string }) => Promise<IOrder>;
  hardDelete: ({ _id }: { _id: string }) => Promise<IOrder>;
}
