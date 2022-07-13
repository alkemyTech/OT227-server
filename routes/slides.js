const express = require('express');
const router = express.Router();
const SlideController = require('../controllers/slideController');
const CheckRoleId = require('../middleware/checkRole');

router.get('/', CheckRoleId.isAdmin, SlideController.getAllSlides);

module.exports = router