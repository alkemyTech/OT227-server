const express = require('express');
const router = express.Router();
const SlideController = require('../controllers/slideController');

router.get('/', SlideController.getAllSlides);

module.exports = router