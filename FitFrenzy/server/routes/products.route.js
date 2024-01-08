import { Router } from "express";
import {
  allProductsController,
  oneProductController,
  productsOfOneCategoryController,
} from "../controllers/products.controller.js";

export const productsRouter = Router();

productsRouter.get("/", allProductsController);
productsRouter.get("/:category", productsOfOneCategoryController);
productsRouter.get("/:id", oneProductController);
