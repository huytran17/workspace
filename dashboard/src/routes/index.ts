import { concat, flattenDeep } from "lodash";
import authRouter from "./auth";

const appRouter = flattenDeep(concat(authRouter));

export default appRouter;
