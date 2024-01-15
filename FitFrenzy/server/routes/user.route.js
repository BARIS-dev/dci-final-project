import { Router } from 'express';
import { login, signup } from '../controllers/authController.js';
import { getAllUsers } from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.post('/signup', signup);
userRouter.post('/login', login);

userRouter.route('/').get(getAllUsers);

export default userRouter;
