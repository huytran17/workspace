import makeCreateOrder from "./create-order";
import makeDeleteOrder from "./delete-order";
import makeHardDeleteOrder from "./hard-delete-order";
import makeUpdateOrder from "./update-order";

import { orderDb } from "@/data-access";

const createOrder = makeCreateOrder({ orderDb });
const deleteOrder = makeDeleteOrder({ orderDb });
const hardDeleteOrder = makeHardDeleteOrder({ orderDb });
const updateOrder = makeUpdateOrder({ orderDb });

const orderServices = Object.freeze({
  createOrder,
  deleteOrder,
  hardDeleteOrder,
  updateOrder,
});

export default orderServices;

export { createOrder, deleteOrder, hardDeleteOrder, updateOrder };

