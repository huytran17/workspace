import { userDb } from "@/data-access";
import makeCreateUser from "./create-user";
import makeDeleteUser from "./delete-user";
import makeGetUserByEmail from "./get-user-by-email";
import makeGetUserById from "./get-user-by-id";
import makeGetUsers from "./get-users";
import makeHardDeleteUser from "./hard-delete-user";

const createUser = makeCreateUser({ userDb });
const deleteUser = makeDeleteUser({ userDb });
const getUserByEmail = makeGetUserByEmail({ userDb });
const getUserById = makeGetUserById({ userDb });
const getUsers = makeGetUsers({ userDb });
const hardDeleteUser = makeHardDeleteUser({ userDb });

const userServices = Object.freeze({
  createUser,
  deleteUser,
  getUserByEmail,
  getUserById,
  getUsers,
  hardDeleteUser,
});

export default userServices;

export {
  createUser,
  deleteUser,
  getUserByEmail,
  getUserById,
  getUsers,
  hardDeleteUser,
};
