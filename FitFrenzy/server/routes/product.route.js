import { Router } from "express";
import {
  getProductsController,
  getProductDetailsController,
  getProductReviewsController,
  toggleLikeController,
  addProductToCartController,
} from "../controllers/product.controller.js";
import { optionalProtect, protect } from "../controllers/authController.js";

export const productRouter = Router();

productRouter.get("/products/:category?", getProductsController);

productRouter.get("/product/:productId", getProductDetailsController);

productRouter.get("/product/:productId/reviews", getProductReviewsController);

productRouter.post(
  "/product/:productId/toggle-like",
  protect,
  toggleLikeController
);

productRouter.post(
  "/product/:productId/add",
  optionalProtect,
  addProductToCartController
);
