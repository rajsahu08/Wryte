// Middleware to check if user is authenticated
module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl;
        
        // Custom message for write functionality
        if (req.originalUrl === '/articles/new') {
            req.flash('error', 'You must be logged in to write an article');
        } else {
            req.flash('error', 'You must be signed in to access this page');
        }
        
        return res.redirect('/login');
    }
    next();
};

// Middleware to check if user is the author of an article
module.exports.isAuthor = async (req, res, next) => {
    const { id } = req.params;
    const article = await require('./models/article').findById(id);
    
    if (!article) {
        req.flash('error', 'Article not found');
        return res.redirect('/');
    }
    
    if (!article.author.equals(req.user._id)) {
        req.flash('error', 'You do not have permission to do that');
        return res.redirect(`/articles/${id}`);
    }
    
    next();
};
