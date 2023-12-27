import { adminDb } from "@/data-access";
import makeCreateAdmin from "./create-admin";
import makeDeleteAdmin from "./delete-admin";
import makeGetAdminByEmail from "./get-admin-by-email";
import makeGetAdminById from "./get-admin-by-id";
import makeGetAllAdminsPaginated from "./get-all-admins-paginated";
import makeHardDeleteAdmin from "./hard-delete-admin";
import makeUpdateAdmin from "./update-admin";

const createAdmin = makeCreateAdmin({ adminDb });
const deleteAdmin = makeDeleteAdmin({ adminDb });
const getAdminByEmail = makeGetAdminByEmail({ adminDb });
const getAdminById = makeGetAdminById({ adminDb });
const getAllAdminsPaginated = makeGetAllAdminsPaginated({ adminDb });
const hardDeleteAdmin = makeHardDeleteAdmin({ adminDb });
const updateAdmin = makeUpdateAdmin({ adminDb });

const adminServices = Object.freeze({
  createAdmin,
  deleteAdmin,
  getAdminByEmail,
  getAdminById,
  getAllAdminsPaginated,
  hardDeleteAdmin,
  updateAdmin,
});

export default adminServices;

export {
  createAdmin,
  deleteAdmin,
  getAdminByEmail,
  getAdminById,
  getAllAdminsPaginated,
  hardDeleteAdmin,
  updateAdmin,
};
