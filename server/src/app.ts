import dotenv from "dotenv";
dotenv.config();

import bodyParser from "body-parser";
import express from "express";
import helmet from "helmet";
import "module-alias/register";
import { cors } from "./config/cors";
import { upload } from "./config/multer-s3";
import Redis from "./config/redis";

const app = express();

app.use(cors);
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(upload.single("files"));

app.listen(process.env.BASE_PORT, () => {
  console.log(`Server listening on port ${process.env.BASE_PORT}`);
  new Redis();
});
