var express = require('express');
var router = express.Router();
const { body } = require('express-validator');
const CategoryController = require('../controllers/categoryController');
const Validator = require('../helpers/validator');
const CheckRoleId = require('../middleware/checkRole');

router.put('/:id', [body('name').not().isEmpty().isString(), body('description').not().isEmpty().isString(), body('image').not().isEmpty().isString(), Validator.validateFields],
    CheckRoleId.isAdmin, CategoryController.updateCategoryById);

module.exports = router;
