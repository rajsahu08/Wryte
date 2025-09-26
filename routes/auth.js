const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const passport = require('passport');

// GET /register - Show registration form
router.get('/register', authController.renderRegisterForm);

// POST /register - Handle user registration
router.post('/register', authController.register);

// GET /login - Show login form
router.get('/login', authController.renderLoginForm);

// POST /login - Handle user login
router.post('/login', passport.authenticate('local', { 
    failureFlash: true, 
    failureRedirect: '/login' 
}), authController.login);

// POST /logout - Handle user logout
router.post('/logout', authController.logout);

module.exports = router;
