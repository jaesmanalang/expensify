const asyncHandler = require('express-async-handler');
const AppError = require('../utils/AppError');
const Transaction = require('../models/Transaction');
const User = require('../models/User');

const createTransaction = asyncHandler(async (req, res) => {
  const newTransaction = {
    user: req.user._id,
    ...req.body,
  };

  const transaction = await Transaction.create(newTransaction);

  res.status(201).json({
    status: 'success',
    transaction,
  });
});

const getTransactions = asyncHandler(async (req, res) => {
  const transactions = await Transaction.find({ user: req.user._id });
  res.status(200).json({
    status: 'success',
    transactions,
  });
});

module.exports = {
  createTransaction,
  getTransactions,
};
