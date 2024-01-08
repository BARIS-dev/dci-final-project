import { Router } from "express";
import { productsController } from "../controllers/products.controller.js";

export const productsRouter = Router();

productsRouter.get("/", productsController);
