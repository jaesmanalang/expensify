const router = require('express').Router();
const transactionController = require('../controllers/transactionController');
const authHandler = require('../middlewares/authHandler');

router
  .route('/')
  .post(authHandler.protect, transactionController.createTransaction)
  .get(authHandler.protect, transactionController.getTransactions);

module.exports = router;
