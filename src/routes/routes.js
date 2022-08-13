import { Router } from "express";
import { createCategoriesController } from "../controllers/user.controllers";

const useRoutes = Router();

useRoutes.post("/categories", createCategoriesController);

useRoutes.get("/categories");

useRoutes.get("/categories/:id");

useRoutes.patch("/categories/:id");

useRoutes.delete("/categories/:id");

useRoutes.post("/products");

useRoutes.get("/products");

useRoutes.get("/products/:id");

useRoutes.patch("/products/:id");

useRoutes.delete("/products/:id");

useRoutes.get("/products/category/:category_id");

export default useRoutes;
