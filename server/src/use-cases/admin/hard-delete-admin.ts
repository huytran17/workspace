import IAdminDb from "@/data-access/interfaces/admin-db";
import IAdmin from "@/database/interfaces/admin";

export type HardDeleteAdmin = ({ _id }: { _id: string }) => Promise<IAdmin>;

export default function makeHardDeleteAdmin({
  adminDb,
}: {
  adminDb: IAdminDb;
}): HardDeleteAdmin {
  return async function hardDeleteAdmin({ _id }) {
    return await adminDb.hardDelete({ _id });
  };
}
