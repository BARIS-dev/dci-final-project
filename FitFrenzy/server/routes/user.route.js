import { Router } from "express";
import {
  userSignInController,
  userSignUpController,
} from "../controllers/user.controller.js";
import { emailValidator } from "../middlewares/validators/email.validator.js";
import { validationHandler } from "../middlewares/validators/validation.js";
import { usernameValidator } from "../middlewares/validators/username.validator.js";
import { passwordValidator } from "../middlewares/validators/password.validator.js";

export const userRouter = Router();

userRouter
  .post(
    "/signin",
    emailValidator,
    validationHandler,
    //TODO: Token generator
    userSignInController
  )
  .post(
    "/signup",
    emailValidator,
    usernameValidator,
    passwordValidator,
    //TODO: Token generator
    userSignUpController
  );

export default userRouter;
