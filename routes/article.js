const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');
const multer = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });
const { isLoggedIn, isAuthor } = require('../middleware');

router.get('/new', isLoggedIn, articleController.renderNewForm);
router.post('/new', isLoggedIn, upload.single('image'), articleController.createArticle);

router.get('/:id', articleController.showArticle);
router.delete('/:id', isLoggedIn, isAuthor, articleController.destroyArticle);
router.put('/:id', isLoggedIn, isAuthor, upload.single('image'), articleController.updateArticle);

router.get('/:id/edit', isLoggedIn, isAuthor, articleController.renderEditForm);

module.exports = router;