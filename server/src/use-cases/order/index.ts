import makeCreateOrder from "./create-order";
import makeDeleteOrder from "./delete-order";
import makeGetOrdersByUserPaginated from "./get-orders-by-user-paginated";
import makeHardDeleteOrder from "./hard-delete-order";
import makeUpdateOrder from "./update-order";

import { orderDb } from "@/data-access";

const createOrder = makeCreateOrder({ orderDb });
const deleteOrder = makeDeleteOrder({ orderDb });
const hardDeleteOrder = makeHardDeleteOrder({ orderDb });
const updateOrder = makeUpdateOrder({ orderDb });
const getOrdersByUserPaginated = makeGetOrdersByUserPaginated({ orderDb });

const orderServices = Object.freeze({
  createOrder,
  deleteOrder,
  hardDeleteOrder,
  updateOrder,
  getOrdersByUserPaginated,
});

export default orderServices;

export {
  createOrder,
  deleteOrder,
  getOrdersByUserPaginated,
  hardDeleteOrder,
  updateOrder,
};
