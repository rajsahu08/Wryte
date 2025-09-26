const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');
const bcrypt = require('bcryptjs');

// Configure Passport to use local strategy
passport.use(new LocalStrategy({
    usernameField: 'email' // Use email instead of username for login
}, async (email, password, done) => {
    try {
        // Find user by email
        const user = await User.findOne({ email: email });
        
        if (!user) {
            return done(null, false, { message: 'No user found with this email' });
        }
        
        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (isMatch) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Incorrect password' });
        }
    } catch (error) {
        return done(error);
    }
}));

// Serialize user (save user ID to session)
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Deserialize user (get user from session)
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error);
    }
});

module.exports = passport;