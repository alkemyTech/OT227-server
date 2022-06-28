var express = require('express');
var router = express.Router();
const { body } = require('express-validator');
const CategoryController = require('../controllers/categoryController');
const Validator = require('../helpers/validator');
const CheckRoleId = require('../middleware/checkRole');

router.post('/', [body('name').not().isEmpty().isString(), Validator.validateFields], CheckRoleId.isAdmin, CategoryController.createCategory);

module.exports = router;
