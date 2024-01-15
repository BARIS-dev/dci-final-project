import { check } from "express-validator";
<<<<<<< HEAD

=======
>>>>>>> main
export const emailValidator = check("email")
  .isEmail()

  .withMessage("Dies ist keine korrekte Email")

  .normalizeEmail()

  .trim()

  .escape()
<<<<<<< HEAD

  .isLength({ min: 5, max: 50 })

=======
  .isLength({ min: 5, max: 50 })
>>>>>>> main
  .withMessage("Die Email muss zwischen 5 und 50 Zeichen lang sein");
