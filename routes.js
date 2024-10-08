const express = require('express');
const router = express.Router();
const authController = require('./authController');
const userController = require('./userController');
const mainController = require('./mainController');
const searchingController = require('./searchingController');
const gameController = require('./gameController');



const isAuthenticated = require('./authMiddleware');

router.get('/login', authController.loginPage);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/register', userController.registerPage);
router.post('/register', userController.register);

// Protected routes that require authentication
router.get('/main', isAuthenticated, mainController.mainPage);
router.get('/reminder', isAuthenticated, authController.reminderPage);
router.post('/reminder', isAuthenticated, authController.sendReminder);
router.get('/searching', isAuthenticated, searchingController.searchingPage);
router.get('/game', isAuthenticated, gameController.gamePage);



module.exports = router;
