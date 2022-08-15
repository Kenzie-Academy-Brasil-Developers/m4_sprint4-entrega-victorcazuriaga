import { Router } from "express";
import {
  createProductController,
  deletedProductByIdController,
  listAllProductsController,
  listProductByIdController,
  relatedProductsWithCategoryIdController,
  updatedProductByIdController,
} from "../controllers/products.controller";
import {
  createCategoriesController,
  deletedCategoryForIdController,
  listCategoriesController,
  retrivedCategoryIdController,
  updatedNameCategoryIdController,
} from "../controllers/categories.controllers";
import categoriesSchema from "../database/schemas /categories.schema";
import productSchema from "../database/schemas /product.schema";
import categoryExistMiddleware from "../middlewares/categoryExist.middleware";
import productExistMiddleware from "../middlewares/productExist.middleware";
import schemaValidation from "../middlewares/schemaValidated.middleware";

const useRoutes = Router();

useRoutes.post(
  "/categories",
  schemaValidation(categoriesSchema),
  createCategoriesController
);

useRoutes.get("/categories", listCategoriesController);

useRoutes.get(
  "/categories/:id",
  categoryExistMiddleware,
  retrivedCategoryIdController
);

useRoutes.patch(
  "/categories/:id",
  schemaValidation(categoriesSchema),
  updatedNameCategoryIdController
);

useRoutes.delete(
  "/categories/:id",
  categoryExistMiddleware,
  deletedCategoryForIdController
);

useRoutes.post(
  "/products",
  schemaValidation(productSchema),
  createProductController
);

useRoutes.get("/products", listAllProductsController);

useRoutes.get(
  "/products/:id",
  productExistMiddleware,
  listProductByIdController
);

useRoutes.patch(
  "/products/:id",
  productExistMiddleware,
  updatedProductByIdController
);

useRoutes.delete(
  "/products/:id",
  productExistMiddleware,
  deletedProductByIdController
);

useRoutes.get(
  "/products/category/:id",
  categoryExistMiddleware,
  relatedProductsWithCategoryIdController
);

export default useRoutes;
