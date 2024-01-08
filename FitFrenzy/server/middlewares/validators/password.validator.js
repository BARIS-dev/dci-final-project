import expressvalidator from "express-validator";

export const passwordValidator = expressvalidator
  .check("password")
  .matches(/^(?=.*[A-Z]).{8,}$/)
  .withMessage("Das Passwort ist zu unsicher")
  .escape()
  .trim();
