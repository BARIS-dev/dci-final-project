import express from "express";
import { config } from "dotenv";
import {
  mongoConnect,
  mongoConnectListener,
  mongoDisconnectListener,
  mongoErrorListener,
} from "./config/db.connect.js";
import { userRouter } from "./routes/user.route.js";
import { productsRouter } from "./routes/products.route.js";

config();
mongoErrorListener();
mongoConnectListener();
mongoDisconnectListener();
await mongoConnect();

const app = express();
app.use(express.json());

app.use("/user", userRouter);
app.use("/products", productsRouter);

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

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
