var express = require('express');
var router = express.Router();
const categoryController = require('../controllers/categoryController');
const CheckRoleId = require('../middleware/checkRole');
const { param, body } = require('express-validator');
const { validateFields } = require('../helpers/validator');

router.get('/',CheckRoleId.isAdmin,categoryController.getAllCategories);
router.delete('/:id',categoryController.deleteCategory);
router.get('/:id',[CheckRoleId.isAdmin, param("id").isNumeric(), validateFields],categoryController.getCategoryById);


module.exports = router;