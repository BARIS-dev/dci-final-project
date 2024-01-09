import express from 'express';
import { config } from 'dotenv';
import {
  mongoConnect,
  mongoConnectListener,
  mongoDisconnectListener,
  mongoErrorListener,
} from './config/db.connect.js';
import userRouter from './routes/user.route.js';
import AppError from './utils/appError.js';

config();
mongoErrorListener();
mongoConnectListener();
mongoDisconnectListener();
await mongoConnect();

const app = express();
app.use(express.json());

app.use('/user', userRouter);

// 404 HANDLER
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
