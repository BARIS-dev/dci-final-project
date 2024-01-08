import userModel from "../models/user.model.js";

export async function userSignUpController(req, res, next) {
  const { firstName, lastName, username, email, password } = req.body;

  try {
    const data = await userModel.create({
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password,
    });

    const dataObj = data.toObject();
    delete dataObj.password;

    res.status(200).json({
      answer: {
        code: 200,
        data: dataObj,
      },
    });
  } catch (error) {
    res.status(401).json({
      answer: {
        code: 401,
        data: "Dieser Benutzer existiert bereits.",
      },
    });
  }
}

export async function userSignInController(req, res, next) {
  try {
    const { username, email, password } = req.body;
    const user = await userModel.findOne({ username, email });

    if (!user) {
      res.status(401).json({
        answer: {
          code: 401,
          data: "Benutzername/Email und Passwort stimmen nicht überein.",
        },
      });

      const isValid = await user.auth(password);

      if (isValid) {
        const dataObj = user.toObject();
        delete dataObj.password;
        //TODO: JWT einfügen
      } else {
        res.status(401).json({
          answer: {
            code: 401,
            data: "Benutzername/Email und Passwort stimmen nicht überein.",
          },
        });
      }
    }
  } catch (error) {
    next(error.message);
  }
}
