const article = require("../models/article");

module.exports.renderNewForm = (req,res)=>{
    res.render('./articles/new');
}

module.exports.renderEditForm = async(req,res)=>{
    let {id} = req.params;
    const articleToEdit = await article.findById(id);
    res.render('./articles/edit',{article:articleToEdit});
}
module.exports.updateArticle = async(req,res)=>{
    let {id} = req.params;
    const { title, description } = req.body;
    const updatedArticle = await article.findByIdAndUpdate(id, { title, description }, { new: true });
    
    // Update image data if a new file was uploaded
    if (req.file) {
        updatedArticle.image = {
            url: req.file.path,
            filename: req.file.filename
        };
        await updatedArticle.save();
    }
    res.redirect(`/articles/${updatedArticle._id}`);
     
}

module.exports.createArticle =  async(req,res)=>{
    const { title, description } = req.body;
        
        // Create new article object
        const newArticle = new article({
            title,
            description,
            author: req.user._id
        });
        
        // Add image data if file was uploaded
        if (req.file) {
            newArticle.image = {
                url: req.file.path,
                filename: req.file.filename
            };
        }
        await newArticle.save();
        req.flash('success', 'Article created successfully!');
        res.redirect('/');
}

module.exports.showArticle = async(req,res)=>{
    let {id} = req.params;
    const foundarticle = await article.findById(id).populate('author');
    res.render("./articles/show",{article:foundarticle});
}

module.exports.destroyArticle = async(req,res)=>{
    let {id} = req.params;
    await article.findByIdAndDelete(id);
    req.flash('success', 'Article deleted successfully!');
    res.redirect("/");
}