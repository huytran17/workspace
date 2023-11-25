import { Router } from "express";
import { auth_router } from "./user/auth";

const app_router = Router();

app_router.use("/auth", auth_router);

export { app_router };
