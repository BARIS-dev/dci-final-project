import { Router } from 'express';
import { login, signup, protect } from '../controllers/authController.js';
import { getAllUsers } from '../controllers/user.controller.js';

export const userRouter = Router();

userRouter.post('/signup', signup);
userRouter.post('/login', login);

userRouter.route('/').get(protect, getAllUsers);

export default userRouter;
