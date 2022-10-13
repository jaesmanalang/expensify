const mongoose = require('mongoose');

const { Schema } = mongoose;

const transactionSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Please summarize your transaction'],
  },

  amount: {
    type: Number,
    required: [true, 'Please enter the amount'],
  },

  category: {
    type: String,
    enum: ['Expense', 'Income'],
    default: 'Expense',
  },

  createdOn: {
    type: Date,
    default: Date.now(),
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required'],
  },
});

module.exports = mongoose.model('Transaction', transactionSchema);
