import { Router } from "express";
import {
  checkout,
  deleteCart,
  removeItemFromCart,
  updateCartPriceWhenQuantityChanges,
  viewCart,
} from "../controllers/cartController.js";

export const cartRouter = Router();

cartRouter.get("/", viewCart);
cartRouter.put("/update", updateCartPriceWhenQuantityChanges);
cartRouter.put("/remove-item", removeItemFromCart);
cartRouter.delete("/delete", deleteCart);
cartRouter.post("/checkout", checkout);
