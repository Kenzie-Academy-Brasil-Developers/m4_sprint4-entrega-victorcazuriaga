import { Client } from "pg";
import "dotenv/config";

const database = new Client(
  process.env.NODE_ENV === "test"
    ? {
        user: "postgres",
        host: "localhost",
        database: "test_products",
        password: "postgres",
        port: 5433,
      }
    : {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB,
        password: process.env.DB_PASSWORD,
        port: 5431,
      }
);

export const startDatabase = async () => {
  await database.connect();
  console.log("connect DBA");
};

export default database;
