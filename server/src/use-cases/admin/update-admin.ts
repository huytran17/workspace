import IAdminDb from "@/data-access/interfaces/admin-db";
import IAdmin from "@/database/interfaces/admin";

export type UpdateAdmin = ({
  adminDetails,
}: {
  adminDetails: Partial<IAdmin>;
}) => Promise<IAdmin>;

export default function makeUpdateAdmin({
  adminDb,
}: {
  adminDb: IAdminDb;
}): UpdateAdmin {
  return async function updateAdmin({ adminDetails }) {
    return await adminDb.update(adminDetails);
  };
}
