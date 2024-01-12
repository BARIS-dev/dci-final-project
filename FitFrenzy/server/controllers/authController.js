import userModel from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';

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

// LOGIN A USER
const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) CHECK IF EMAIL AND PASSWORD EXIST
  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }

  // 2) CHECK IF USER EXISTS && PASSWORD IS CORRECT

  // 3) IF EVERYTHING IS OK, SEND TOKEN TO CLIENT
  const token = '';
  res.status(200).json({
    status: 'success',
    token,
  });
});

export { signup, login };
