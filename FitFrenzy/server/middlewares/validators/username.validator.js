<<<<<<< HEAD
import expressvalidator from "express-validator";

 

export const usernameValidator = expressvalidator

  .check("username")
<<<<<<< HEAD
  .isLength({ min: 3, max: 30 })
=======

  .isLength({ min: 3, max: 30 })

>>>>>>> main
  .withMessage("Der Benutzername muss zwischen 3 und 50 Zeichen lang sein")

=======
import { check } from "express-validator";
export const usernameValidator = check("username")
  .isLength({ min: 2, max: 30 })
  .withMessage("Der Name muss zwischen 2 und 50 Zeichen lang sein")
>>>>>>> main
  .trim()
  .escape()
  .custom((value) => {
    if (value.toLowerCase() === "admin") {
      throw new Error("Der Benutzername darf nicht 'Admin' sein");
    }
    return true;
  });
