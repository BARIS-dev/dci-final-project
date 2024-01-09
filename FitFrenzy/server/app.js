import express from 'express';
import userRouter from './routes/user.route.js';
import AppError from './utils/appError.js';

const app = express();
app.use(express.json());

app.use('/user', userRouter);

// 404 HANDLER
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

export default app;
