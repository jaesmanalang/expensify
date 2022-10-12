const mongoose = require('mongoose');

const connectDB = async () => {
  mongoose.connection.once('open', () => {
    console.log(
      `MongoDB connection established on: ${mongoose.connection.host}`
    );
  });

  mongoose.connection.on('error', err => {
    console.error(err);
  });

  const MONGO_URI =
    process.env.NODE_ENV === 'production'
      ? process.env.MONGO_PROD_URI
      : process.env.MONGO_DEV_URI;

  try {
    await mongoose.connect(MONGO_URI);
  } catch (err) {
    console.error(`Initial connection error: ${err}`);
    process.exit(1);
  }
};

module.exports = connectDB;
