import express from "express";
import "dotenv/config";
import useRoutes from "./routes/routes";
import { startDatabase } from "./database";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.status(401).json({ message: "da" });
});

app.use("/", useRoutes);

export default app.listen(3333, () => {
  startDatabase();
  console.log("Server running");
});
