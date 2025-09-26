const User = require('../models/user');
const bcrypt = require('bcryptjs');

// Render register form
module.exports.renderRegisterForm = (req, res) => {
    res.render('auth/register');
};

// Handle user registration
module.exports.register = async (req, res, next) => {
    try {
        const { username, email, password, firstName, lastName } = req.body;
        
        // Basic validation
        if (!username || !email || !password || !firstName || !lastName) {
            req.flash('error', 'All fields are required');
            return res.redirect('/register');
        }
        
        // Check if user already exists
        const existingEmail = await User.findOne({ email: email });
        const existingUsername = await User.findOne({ username: username });
        
        if (existingEmail && existingUsername) {
            req.flash('error', 'Both email and username are already taken');
            return res.redirect('/register');
        } else if (existingEmail) {
            req.flash('error', 'An account with this email already exists');
            return res.redirect('/register');
        } else if (existingUsername) {
            req.flash('error', 'This username is already taken');
            return res.redirect('/register');
        }
        
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12);
        
        // Create new user
        const user = new User({
            username,
            email,
            password: hashedPassword,
            firstName,
            lastName
        });
        
        await user.save();
        
        // Log user in after registration
        req.login(user, (err) => {
            if (err) return next(err);
            req.flash('success', 'Welcome! You have successfully registered');
            res.redirect('/');
        });
        
    } catch (error) {
        console.log('Registration error:', error);
        req.flash('error', 'Something went wrong during registration');
        res.redirect('/register');
    }
};

// Render login form
module.exports.renderLoginForm = (req, res) => {
    res.render('auth/login');
};

// Handle user login
module.exports.login = (req, res, next) => {
    req.flash('success', 'Welcome back!');
    const redirectUrl = req.session.returnTo || '/';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
};

// Handle user logout
module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);
        req.flash('success', 'You have been logged out');
        res.redirect('/');
    });
};
