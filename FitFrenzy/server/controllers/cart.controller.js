import cartModel from "../models/cartModel.js";

export function viewCart(req, res, next) {
  try {
    const username = req.user ? req.user.username : undefined;
    const guestCart = req.cookies.guestCart;
  } catch (error) {}
}

export function updateCartPriceWhenQuantityChanges(req, res, next) {}

export function removeItemFromCart(req, res, next) {}

export function deleteCart(req, res, next) {}

export function checkout(req, res, next) {}
