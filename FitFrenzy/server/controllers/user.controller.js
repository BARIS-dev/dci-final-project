import userModel from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import catchAsync from '../utils/catchAsync.js';

// export async function userSignUpController(req, res, next) {
//   const { firstName, lastName, username, email, password } = req.body;

//   try {
//     const data = await userModel.create({
//       firstName: firstName,
//       lastName: lastName,
//       username: username,
//       email: email,
//       password: password,
//     });

//     const dataObj = data.toObject();
//     delete dataObj.password;

//     //* payload, secret, and options
//     const signToken = function (id) {
//       return jwt.sign({ id }, process.env.JWT_SECRET, {
//         expiresIn: process.env.JWT_EXPIRES_IN,
//       });
//     };

//     const token = signToken(data._id);

//     res.status(200).json({
//       answer: {
//         code: 200,
//         token,
//         data: dataObj,
//       },
//     });
//   } catch (error) {
//     res.status(401).json({
//       answer: {
//         code: 401,
//         data: 'Dieser Benutzer existiert bereits.',
//       },
//     });
//   }
// }

//* payload, secret, and options
const signToken = function (id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = function (user, statusCode, res) {
  // CREATE A TOKEN
  const token = signToken(user._id);

  res.status(statusCode).json({
    status: 'success',
    token,
    data: { user },
  });
};

// CREATE A USER
const signup = catchAsync(async (req, res, next) => {
  const newUser = await userModel.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    isAdmin: req.body.isAdmin,
    membership: req.body.membership,
  });

  // SEND TOKEN TO CLIENT
  createSendToken(newUser, 201, res);
});

// todo: sign in
export async function userSignInController(req, res, next) {
  try {
    const { username, email, password } = req.body;
    const user = await userModel.findOne({ username, email });

    if (!user) {
      res.status(401).json({
        answer: {
          code: 401,
          data: 'Benutzername/Email und Passwort stimmen nicht überein.',
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
            data: 'Benutzername/Email und Passwort stimmen nicht überein.',
          },
        });
      }
    }
  } catch (error) {
    next(error.message);
  }
}

export { signup };
