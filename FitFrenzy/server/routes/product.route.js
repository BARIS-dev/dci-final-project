import { Router } from "express";
import {
  getAllProductsController,
  getProductsByCategoryController,
  getProductDetailsController,
  getProductReviewsController,
  toggleLikeController,
  getFilteredProductsController,
  getFilteredProductsByCategoryController,
} from "../controllers/product.controller.js";

export const productRouter = Router();

productRouter.get("/products", getAllProductsController);
productRouter.get("/:category", getProductsByCategoryController);

//Add route for filtering products
productRouter.get("/products/filter", getFilteredProductsController);
productRouter.get("/:category/filter", getFilteredProductsByCategoryController);

productRouter.get("/:productId", getProductDetailsController);
productRouter.get("/:productId/reviews", getProductReviewsController);
productRouter.post(
  "/:productId/toggleLike",
  //Add MIDDLEWARE here to check the cookie/token (jwt-VERIFIER) to identify the user,
  toggleLikeController
);

//TODO: Add a product to user's FAVORITE LIST => seperate route? ✅
//TODO: when retrieving (all) products: Add limit, page ✅
//TODO: after retrieving (all) products: Add FILTER (filtering options by price range, brand, size, color, etc.) ⏳
//TODO: SEARCH function (search for products based on keywords)✅
//TODO: allow LOGGED-IN users to Submit their own REVIEW and ratings for a product ??? (needed? or only users who already bought this product can submit review?)
//TODO: Inventory Management: function to track product STOCK LEVELS and update them when a purchase is made
//TODO: at productDetails-Page: handle OUT OF STOCK case
