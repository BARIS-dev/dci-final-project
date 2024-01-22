import { Router } from "express";
import {
  getProductsController,
  getProductDetailsController,
  getProductReviewsController,
  toggleLikeController,
  //getFilteredProductsController,
  addProductToCartController,
} from "../controllers/product.controller.js";

export const productRouter = Router();

//Retrieve all products (or based on category)
productRouter.get("/products/:category?", getProductsController);

//Retrieve product details
productRouter.get("/product/:productId", getProductDetailsController);

//Retrieve product reviews
productRouter.get("/product/:productId/reviews", getProductReviewsController);

//Toggle like for a product in productDetails-Page
productRouter.post(
  "/product/:productId/toggleLike",
  //Add MIDDLEWARE here to check the cookie/token (jwt-VERIFIER) to identify the user,
  toggleLikeController
);

//add product to cart
productRouter.post(
  "/product/:productId/add",
  //MIDDLEWARE here (verify user)
  addProductToCartController
);

//TODO: Add a product to user's FAVORITE LIST => seperate route? ✅
//TODO: when retrieving (all) products: Add limit, page ✅
//TODO: after retrieving (all) products: Add FILTER ✅
//TODO: SEARCH function (search for products based on keywords)✅
//TODO: Verified purchase => user Submit their own REVIEW and ratings for a product ⏳
//TODO: Inventory Management: after Verified purchase => update product's STOCK LEVEL ⏳
//TODO: at productDetails-Page: handle OUT OF STOCK case ✅
//TODO: add product to CART ⏳
