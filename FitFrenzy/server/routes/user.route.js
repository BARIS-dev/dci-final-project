import { Router } from 'express';
import {
  signup,
  login,
  logout,
  protect,
  restrictTo,
} from '../controllers/authController.js';
import { getAllUsers } from '../controllers/user.controller.js';

export const userRouter = Router();

userRouter.post('/signup', signup);
userRouter.post('/login', login);
userRouter.get('/logout', logout);

// Protect all routes after this middleware
userRouter.use(protect);

userRouter.route('/').get(getAllUsers);

export default userRouter;
