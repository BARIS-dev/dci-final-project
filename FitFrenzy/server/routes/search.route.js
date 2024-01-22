import { Router } from "express";
import { searchController } from "../controllers/search.controller.js";

export const searchRouter = Router();

searchRouter.post("/", searchController);
