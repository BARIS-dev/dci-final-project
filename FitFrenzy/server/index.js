import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

import AppError from "./utils/appError.js";
import globalErrorHandler from "./controllers/errorController.js";
import userRouter from "./routes/user.route.js";

dotenv.config(); // Load env variables

const app = express();

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(express.json());

app.use("/user", userRouter);
app.use("/", productRouter);
app.use("/favorites", favoriteRouter);

app.all("*", (req, res, next) => {
  res.status(404).json({
    answer: {
      code: 404,
      message: "Page not found",
    },
  });
});

app.use((error, req, res, next) => {
  res.status(error.code || 500).json({
    answer: {
      code: error.code || 500,
      message: error.message || "Internal server error",
    },
  });
});

// 404 HANDLER
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
