import expressvalidator from "express-validator";

export const usernameValidator = expressvalidator
  .check("username")
  .length({ min: 2, max: 30 })
  .withMessage("Der Name muss zwischen 2 und 50 Zeichen lang sein")
  .trim()
  .escape()
  .custom((value) => {
    if (value === "admin" || value === "Admin") {
      throw new Error("Der Name darf nicht 'Admin' sein");
    }
    return true;
  });
