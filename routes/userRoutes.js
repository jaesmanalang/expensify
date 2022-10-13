const router = require('express').Router();
const userController = require('../controllers/userController');
const authHandler = require('../middlewares/authHandler');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/details', authHandler.protect, userController.getUserDetails);

module.exports = router;
