import { Router } from "express";
import { auth_router } from "./auth";
import { password_reset_router } from "./password-reset";

const user_router = Router();

user_router.use("/auth", auth_router);
user_router.use("/password-reset", password_reset_router);

export { user_router };
