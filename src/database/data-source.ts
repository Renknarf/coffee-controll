import { DataSource } from "typeorm";
import dotenv from "dotenv";
dotenv.config();

export const myDataSource = new DataSource({
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: parseInt(`${process.env.TYPEORM_PORT}`),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: ["src/app/entities/*.ts"],
  logging: true,
  synchronize: true,
});
