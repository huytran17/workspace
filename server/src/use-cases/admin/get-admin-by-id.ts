import IAdminDb from "@/data-access/interfaces/admin-db";
import IAdmin from "@/database/interfaces/admin";

export type GetAdminById = ({ _id }: { _id: string }) => Promise<IAdmin>;

export default function makeGetAdminById({
  adminDb,
}: {
  adminDb: IAdminDb;
}): GetAdminById {
  return async function getAdminById({ _id }) {
    return await adminDb.findById({ _id });
  };
}
