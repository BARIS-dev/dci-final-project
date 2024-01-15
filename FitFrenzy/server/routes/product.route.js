import { Router } from "express";
import {
  getAllProductsController,
  getProductsByCategoryController,
  getProductDetailsController,
  getProductReviewsController,
  toggleLikeProduct,
} from "../controllers/product.controller.js";

export const productRouter = Router();

productRouter.get("/products", getAllProductsController);
productRouter.get("/:category", getProductsByCategoryController);
productRouter.get("/:productId", getProductDetailsController);
productRouter.get("/:productId/reviews", getProductReviewsController);
productRouter.post(
  "/:productId/toggleLike",
  //Add MIDDLEWARE here to check the cookie/token (jwt-VERIFIER) to identify the user,
  toggleLikeProduct
);

//TODO: Add a product to user's FAVORITE LIST => seperate route? ⏳
//TODO: when retrieving (all) products: Add PAGINATION (limit, page)
//TODO: after retrieving (all) products: Add FILTER (filtering options by price range, brand, size, color, etc.)
//TODO: SEARCH function (search for products based on keywords) - at homepage? also at navbar? at product page?
//TODO: allow LOGGED-IN users to Submit their own REVIEW and ratings for a product ??? (needed? or only users who already bought this product can submit review?)
//TODO: Inventory Management: function to track product STOCK LEVELS and update them when a purchase is made
//TODO: at productDetails-Page: handle OUT OF STOCK case
