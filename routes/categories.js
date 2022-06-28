var express = require('express');
var router = express.Router();
const CategoryController = require('../controllers/categoryController');
const CheckRoleId = require('../middleware/checkRole');

router.put('/:id', CheckRoleId.isAdmin, CategoryController.updateCategoryById);

module.exports = router;
