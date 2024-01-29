import { Router } from "express";
import {
  checkout,
  deleteCart,
  removeItemFromCart,
  updateCartPriceWhenQuantityChanges,
  viewCart,
} from "../controllers/cart.controller.js";
import { optionalProtect, protect } from "../controllers/authController.js";

export const cartRouter = Router();

cartRouter.get("/", optionalProtect, viewCart);
cartRouter.put("/update", optionalProtect, updateCartPriceWhenQuantityChanges);
cartRouter.put("/remove-item", optionalProtect, removeItemFromCart);
cartRouter.delete("/delete", optionalProtect, deleteCart);
cartRouter.post("/checkout", protect, checkout);
