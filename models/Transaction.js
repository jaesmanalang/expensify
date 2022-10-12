const mongoose = require('mongoose');

const { Schema } = mongoose;

const transactionSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Please summarize your transaction'],
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
  },
});

module.exports = mongoose.model('Transaction', transactionSchema);
