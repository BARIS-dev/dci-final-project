import expressvalidator from 'express-validator';
import { check } from "express-validator";

export const usernameValidator = check("username")
  .isLength({ min: 2, max: 30 })
  .withMessage("Der Name muss zwischen 2 und 50 Zeichen lang sein")
  .trim()
  .escape()
  .custom((value) => {
    if (value.toLowerCase() === "admin") {
      throw new Error("Der Benutzername darf nicht 'Admin' sein");
    }
    return true;
  });
