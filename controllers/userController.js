const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');
const AppError = require('../utils/AppError');
const User = require('../models/User');

const registerUser = asyncHandler(async (req, res) => {
  const userExist = await User.findOne({ email: req.body.email });
  if (userExist) throw new AppError('Email already exists');

  await User.create(req.body);
  res.status(201).json({
    status: 'success',
    message: 'Registration successful',
  });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    throw new AppError('Please enter email and password', 400);

  // check if user email exists
  const user = await User.findOne({ email }).select('+password');
  if (!user) throw new AppError('Email address does not exist', 400);

  // check and compare password if correct
  const correctPassword = await user.correctPassword(password);
  if (!correctPassword) throw new AppError('Incorrect password', 400);

  // generate token if fields are correct
  const token = generateToken(user._id);

  res.status(200).json({
    status: 'success',
    message: 'Logged in successfully',
    token,
  });
});

module.exports = {
  registerUser,
  loginUser,
};
