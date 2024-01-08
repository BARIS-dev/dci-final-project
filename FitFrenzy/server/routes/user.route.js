import { Router } from 'express';
import {
  userSignInController,
  signup,
} from '../controllers/user.controller.js';
import { emailValidator } from '../middlewares/validators/email.validator.js';
import { validationHandler } from '../middlewares/validators/validation.js';
import { usernameValidator } from '../middlewares/validators/username.validator.js';
import { passwordValidator } from '../middlewares/validators/password.validator.js';

const userRouter = Router();

userRouter.post('/signup', signup);

// userRouter
//   .get(
//     '/',
//     emailValidator,
//     validationHandler,
//     //TODO: Token generator
//     userSignInController
//   )
//   .post(
//     '/',
//     emailValidator,
//     usernameValidator,
//     passwordValidator,
//     //TODO: Token generator
//     userSignUpController
//   );

export default userRouter;
