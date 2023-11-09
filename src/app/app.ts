import "express-async-errors";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import { planRouter } from "./routers/planRouter";
import { myDataSource } from "../database/data-source";
import { signatureRouter } from "./routers/signatureRouter";

// establish database connection
myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err: any) => {
    console.error("Error during Data Source initialization:", err);
  });

export const app = express();

app.use(morgan("tiny"));

app.use(cors());

app.use(helmet());

app.use(express.json());

app.use("/plans/", planRouter);

app.use("/signature/", signatureRouter);
