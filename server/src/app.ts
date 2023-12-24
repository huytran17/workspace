import dotenv from "dotenv";
dotenv.config();

import bodyParser from "body-parser";
import express from "express";
import helmet from "helmet";
import "module-alias/register";
import { cors } from "./config/cors";
import { initializeNodemailer } from "./config/mailer/mailer";
import { upload } from "./config/multer-s3";
import Redis from "./config/redis";
import makeDbConnection from "./data-access/make-db";
import { app_router } from "./routes";
import cookieParser from "cookie-parser";
import requestIp from "request-ip";

const app = express();

app.use(cors);
app.use(helmet());
app.use(cookieParser());
app.use(requestIp.mw());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(upload.single("files"));
app.use(app_router);

app.listen(process.env.SERVER_PORT, async () => {
  console.log(`Server is listening on port ${process.env.SERVER_PORT}`);
  await makeDbConnection();
  new Redis();
  initializeNodemailer();
});
