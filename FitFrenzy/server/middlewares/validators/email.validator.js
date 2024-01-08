import expressvalidator from "express-validator";

export const emailValidator = expressvalidator
  .check("email")
  .isEmail()
  .withMessage("Dies ist keine korrekte Email")
  .normalizeEmail()
  .trim()
  .escape()
  .length({ min: 5, max: 50 })
  .withMessage("Die Email muss zwischen 5 und 50 Zeichen lang sein");
