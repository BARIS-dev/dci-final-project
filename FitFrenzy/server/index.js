import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { userRouter } from "./routes/user.route.js";
import { productRouter } from "./routes/product.route.js";
import { favoriteRouter } from "./routes/favorite.route.js";
import { searchRouter } from "./routes/search.route.js";
import { cartRouter } from "./routes/cart.route.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import paymentRouter from "./routes/payment.route.js";

import AppError from "./utils/appError.js";
import globalErrorHandler from "./controllers/errorController.js";
import productReviewModel from "./models/productReview.model.js";


config(); // Load env variables

const app = express();
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(express.json());
app.use(cookieParser());

app.use('/user', userRouter);
app.use('/', productRouter);
app.use('/favorites', favoriteRouter);
app.use('/search', searchRouter);
app.use('/cart', cartRouter);
app.use('/', paymentRouter);

// app.get('/getAllUsers', getAllUsers);

//FOR TESTING - WILL REMOVE
app.use("/reviews", async (req, res, next) => {
  try {
    const allReviews = await productReviewModel.find();
    res.status(200).json({
      message: "test",
      data: allReviews,
    });
  } catch (error) {
    console.log(error);
  }
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.headers);

  next();
});

// 404 HANDLER
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
