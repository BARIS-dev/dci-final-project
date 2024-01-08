import { Router } from "express";
import { productsController } from "../controllers/products.controller.js";

export const productsRoute = Router();

productsRoute.get("/", productsController);
