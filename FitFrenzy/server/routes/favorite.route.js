import jwt from "jsonwebtoken";
import { Router } from "express";
import {
  addFavoriteToCartController,
  getFavoritesListController,
  removeFromFavoritesController,
} from "../controllers/favorite.controller.js";
import { protect } from "../controllers/authController.js";

export const favoriteRouter = Router();

favoriteRouter.use(protect);

favoriteRouter.get("/", getFavoritesListController);

favoriteRouter.post("/:productId/add", addFavoriteToCartController);

favoriteRouter.post("/:productId/remove", removeFromFavoritesController);
