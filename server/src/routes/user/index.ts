import { Router } from "express";
import { auth_router } from "./auth";

const user_router = Router();

user_router.use("/auth", auth_router);

export { user_router };
