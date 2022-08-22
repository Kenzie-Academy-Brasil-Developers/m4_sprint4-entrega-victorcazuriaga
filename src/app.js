import express from "express";
import "dotenv/config";
import useRoutes from "./routes/routes";
import { startDatabase } from "./database";

const app = express();
const PORT = process.env.NODE_ENV === "test" ? 3333 : 3334;

app.use(express.json());

app.use("/", useRoutes);

app.listen(PORT, () => {
  startDatabase();
  console.log(`Server Running ${PORT}`);
});

export default app;
