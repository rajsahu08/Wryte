const article = require("../models/article");
module.exports.renderNewForm = (req,res)=>{
    res.render('./articles/new');
}

module.exports.createArticle =  async(req,res)=>{
    const { title, description } = req.body;
        
        // Create new article object
        const newArticle = new article({
            title,
            description
        });
        
        // Add image data if file was uploaded
        if (req.file) {
            newArticle.image = {
                url: req.file.path,
                filename: req.file.filename
            };
        }
        await newArticle.save();
        res.redirect('/');
}