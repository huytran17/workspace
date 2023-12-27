import IAdminDb, {
  AdminPayloadOmitProps,
} from "@/data-access/interfaces/admin-db";
import IAdmin from "@/database/interfaces/admin";

export type CreateAdmin = ({
  adminDetails,
}: {
  adminDetails: Omit<IAdmin, AdminPayloadOmitProps>;
}) => Promise<IAdmin>;

export default function makeCreateAdmin({
  adminDb,
}: {
  adminDb: IAdminDb;
}): CreateAdmin {
  return async function createAdmin({ adminDetails }) {
    return await adminDb.insert(adminDetails);
  };
}
