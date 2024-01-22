import { check } from "express-validator";
<<<<<<< HEAD

=======
>>>>>>> main
export const emailValidator = check("email")
  .isEmail()
<<<<<<< HEAD

  .withMessage("Dies ist keine korrekte Email")

=======
  .withMessage('Dies ist keine korrekte Email')
>>>>>>> main
  .normalizeEmail()

  .trim()

  .escape()
<<<<<<< HEAD

  .isLength({ min: 5, max: 50 })
<<<<<<< HEAD

=======
  .isLength({ min: 5, max: 50 })
>>>>>>> main
  .withMessage("Die Email muss zwischen 5 und 50 Zeichen lang sein");
=======
  .withMessage("Die Email muss zwischen 5 und 50 Zeichen lang sein");
>>>>>>> main
