import { Router } from "express";
import {
  allProductsController,
  productDetailsController,
  productReviewsController,
  productsOfOneCategoryController,
} from "../controllers/product.controller.js";

export const productRouter = Router();

productRouter.get("/products", allProductsController);
productRouter.get("/:category", productsOfOneCategoryController);
productRouter.get("/:productId", productDetailsController);
productRouter.get("/:productId/reviews", productReviewsController);
