
import express from "express";
import { config } from "dotenv";
import cors from "cors";
import {
  mongoConnect,
  mongoConnectListener,
  mongoDisconnectListener,
  mongoErrorListener,
} from "./config/db.connect.js";
import { userRouter } from "./routes/user.route.js";
import { productRouter } from "./routes/product.route.js";
import { favoriteRouter } from "./routes/favorite.route.js";
import stripeRouter from "./routes/payment.route.js";
import morgan from "morgan";
import AppError from "./utils/appError.js";
import globalErrorHandler from "./controllers/errorController.js";

config(); // Load env variables

const app = express();

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(express.json());

app.use(cors());
app.use("/user", userRouter);
app.use("/", productRouter);
app.use("/favorites", favoriteRouter);
app.use("/payment", stripeRouter);

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.headers);

  next();
});

app.use('/user', userRouter);
app.use('/', productRouter);
app.use('/favorites', favoriteRouter);

app.all('*', (req, res, next) => {
  res.status(404).json({
    answer: {
      code: 404,
      message: 'Page not found',
    },
  });
});

// 404 HANDLER
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
