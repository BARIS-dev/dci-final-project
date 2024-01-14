import expressvalidator from "express-validator";

 

export const usernameValidator = expressvalidator

  .check("username")

  .isLength({ min: 3, max: 30 })

  .withMessage("Der Benutzername muss zwischen 3 und 50 Zeichen lang sein")

  .trim()

  .escape()

  .custom((value) => {

    if (value.toLowerCase() === "admin") {

      throw new Error("Der Benutzername darf nicht 'Admin' sein");

    }

    return true;

  });
