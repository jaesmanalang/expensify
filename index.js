require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const connectDB = require('./config/db');
const AppError = require('./utils/AppError');
const errorHandler = require('./middlewares/errorHandler');
const userRoutes = require('./routes/userRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/transactions', transactionRoutes);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server.`));
});

app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`server started on port: ${port}`);
});
