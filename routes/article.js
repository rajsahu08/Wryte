const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');
const multer = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router.get('/new',articleController.renderNewForm);
router.post('/new', upload.single('image'), articleController.createArticle);

router.get('/:id', articleController.showArticle);
router.delete('/:id', articleController.destroyArticle);
router.put('/:id', upload.single('image'), articleController.updateArticle);

router.get('/:id/edit', articleController.renderEditForm);

module.exports = router;