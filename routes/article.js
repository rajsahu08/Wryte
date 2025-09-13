const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');
const multer = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router.get('/new',articleController.renderNewForm);
router.post('/new', upload.single('image'), articleController.createArticle);

router.get('/:id', articleController.showArticle);

module.exports = router;