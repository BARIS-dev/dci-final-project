import { check } from "express-validator";

export const passwordValidator = check("password")
  .matches(/^(?=.*[A-Z]).{8,}$/)
  .withMessage("Das Passwort ist zu unsicher")
  .escape()
  .trim();
