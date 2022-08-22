import { Client } from "pg";
import "dotenv/config";

const database = new Client(
  process.env.NODE_ENV === "test"
    ? {
        user: process.env.DB_PASSWORD,
        host: process.env.DB_HOST_TEST,
        database: process.env.DB_TEST,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT_TEST,
      }
    : {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
      }
);

export const startDatabase = async () => {
  await database.connect();
  console.log("connect DBA");
};

export default database;
