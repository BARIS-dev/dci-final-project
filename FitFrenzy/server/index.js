import express from "express";
import { config } from "dotenv";
import {
  mongoConnect,
  mongoConnectListener,
  mongoDisconnectListener,
  mongoErrorListener,
} from "/config/db.connect.js";

config();
mongoErrorListener();
mongoConnectListener();
mongoDisconnectListener();
await mongoConnect();

const app = express();
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
