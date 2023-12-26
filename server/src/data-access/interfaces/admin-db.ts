import IAdmin from "@/database/interfaces/admin";

export type AdminPayloadOmitProps =
  | "_id"
  | "created_at"
  | "updated_at"
  | "deleted_at";

export interface IAdminPagination extends IPagination<IAdmin> {}

export default interface IAdminDb {
  findAllPaginated: ({
    query,
    page,
    entries_per_page,
  }: {
    query: string;
    page: number;
    entries_per_page: number;
  }) => Promise<IAdminPagination>;
  findById: ({ _id }: { _id: string }) => Promise<IAdmin>;
  findByEmail: ({ email }: { email: string }) => Promise<IAdmin>;
  insert: (payload: Omit<IAdmin, AdminPayloadOmitProps>) => Promise<IAdmin>;
  update: (payload: Partial<IAdmin>) => Promise<IAdmin>;
  delete: ({ _id }: { _id: string }) => Promise<IAdmin>;
  hardDelete: ({ _id }: { _id: string }) => Promise<IAdmin>;
}
