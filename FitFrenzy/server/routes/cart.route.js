import { Router } from "express";
import {
  checkout,
  deleteCart,
  removeItemFromCart,
  updateCartPriceWhenQuantityChanges,
  viewCart,
} from "../controllers/cart.controller.js";
import { protect } from "../controllers/authController.js";

export const cartRouter = Router();

cartRouter.get("/", protect, viewCart);
cartRouter.put("/:productId/update", updateCartPriceWhenQuantityChanges);
cartRouter.put("/:productId/remove-item", removeItemFromCart);
cartRouter.delete("/delete", deleteCart);
cartRouter.post("/checkout", protect, checkout);
