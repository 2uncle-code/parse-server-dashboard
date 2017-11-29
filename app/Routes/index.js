var express = require('express');
var router = express.Router();
var mainController = require('../Controllers');

router.get('/', mainController.index);
router.get('/about', mainController.about);
router.get('/books', mainController.books);

module.exports = router;