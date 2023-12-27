import IAdminDb, { IAdminPagination } from "@/data-access/interfaces/admin-db";

export type GetAllAdminsPaginated = ({
  query,
  page,
  entries_per_page,
}: {
  query: string;
  page: number;
  entries_per_page: number;
}) => Promise<IAdminPagination>;

export default function makeGetAllAdminsPaginated({
  adminDb,
}: {
  adminDb: IAdminDb;
}): GetAllAdminsPaginated {
  return async function getAllAdminsPaginated({
    query,
    page,
    entries_per_page,
  }) {
    return await adminDb.findAllPaginated({ query, page, entries_per_page });
  };
}
