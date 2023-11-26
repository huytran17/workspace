import { Router } from "express";
import { user_router } from "./user";

const app_router = Router();

app_router.use("/api", user_router);

export { app_router };
