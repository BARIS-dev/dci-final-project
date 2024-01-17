import { Router } from "express";
import {
  getProductsController,
  getProductDetailsController,
  getProductReviewsController,
  toggleLikeController,
  getFilteredProductsController,
  addProductToCartController,
} from "../controllers/product.controller.js";

export const productRouter = Router();

//Retrieve all products (or based on category)
productRouter.get("/products/:category?", getProductsController);

//Retrieve filtered products (based on category, size, price range, color)
productRouter.get("/products/:category?/filter", getFilteredProductsController);

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
//TODO: after retrieving (all) products: Add FILTER (filtering options by price range, brand, size, color, etc.) ✅
//TODO: SEARCH function (search for products based on keywords)✅
//TODO: allow LOGGED-IN users to Submit their own REVIEW and ratings for a product ??? (needed? or only users who already bought this product can submit review?) ⏳
//TODO: Inventory Management: function to track product STOCK LEVELS and update them when a purchase is made ⏳
//TODO: at productDetails-Page: handle OUT OF STOCK case ✅
//TODO: add product to CART ⏳
