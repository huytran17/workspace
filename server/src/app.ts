import dotenv from "dotenv";
dotenv.config();

import bodyParser from "body-parser";
import express from "express";
import helmet from "helmet";
import "module-alias/register";
import { cors } from "./config/cors";
import { upload } from "./config/multer-s3";
import Redis from "./config/redis";
import makeDbConnection from "./data-access/make-db";

const app = express();

app.use(cors);
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(upload.single("files"));

app.listen(process.env.SERVER_PORT, async () => {
  console.log(`Server listening on port ${process.env.SERVER_PORT}`);
  await makeDbConnection();
  new Redis();
});
