const AppError = require('../utils/AppError');

const errorHandler = (err, req, res, next) => {
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors)
      .map(error => error.message)
      .join(', ');

    err = new AppError(message, 400);
  }

  res.status(err.statusCode || 500).json({
    status: err.status || 'error',
    error: err.message,
  });
};

module.exports = errorHandler;
