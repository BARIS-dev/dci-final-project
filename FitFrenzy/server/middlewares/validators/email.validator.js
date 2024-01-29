import { check } from "express-validator";
export const emailValidator = check("email")
  .isEmail()
  .withMessage("Dies ist keine korrekte Email")
  .normalizeEmail()
  .trim()
  .escape()
  .isLength({ min: 5, max: 50 })
  .withMessage("Die Email muss zwischen 5 und 50 Zeichen lang sein");
