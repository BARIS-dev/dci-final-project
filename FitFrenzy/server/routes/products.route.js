import { Router } from "express";
import {
  allProductsController,
  productDetailsController,
  productReviewsController,
  productsOfOneCategoryController,
} from "../controllers/products.controller.js";

export const productsRouter = Router();

productsRouter.get("/products", allProductsController);
productsRouter.get("/:category", productsOfOneCategoryController);
productsRouter.get("/:productId", productDetailsController);
productsRouter.get("/:productId/reviews", productReviewsController);
