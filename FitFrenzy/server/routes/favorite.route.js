import jwt from "jsonwebtoken";
import { Router } from "express";
import {
  addFavoriteToCartController,
  getFavoritesListController,
  removeFromFavoritesController,
  toggleFavoriteController,
} from "../controllers/favorite.controller.js";

export const favoriteRouter = Router();

//TODO: add MIDDLEWARE to check the cookie/token (jwt-VERIFIER) to identify the user => only logged-in users with valid JWT tokens will be able to access all these routes:
//if user not loggedin => inform and redirect to login/register page (?) after logged in come back to the product page?
favoriteRouter.use((req, res, next) => {
  /* const jwtToken = req.cookies.jwt || req.headers.authorization;
  try {
    const decodedJwt = jwt.verify(jwtToken, process.env.JWT_SECRET);
    req.user = decodedJwt; //id??
    next();
  } catch (error) {
    res.status(401).send("Unauthorized");
  } */
});

favoriteRouter.get("/", getFavoritesListController);

favoriteRouter.post("/:productId/addToCart", addFavoriteToCartController);

favoriteRouter.post(
  "/:productId/removeFromFavorites",
  removeFromFavoritesController
);
