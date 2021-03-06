var express = require('express');
var router = express.Router();
const categoryController = require('../controllers/categoryController');
const CheckRoleId = require('../middleware/checkRole');
const { param, body, query } = require('express-validator');
const { validateFields } = require('../helpers/validator');

router.put('/:id', [body('name').not().isEmpty().isString(), body('description').not().isEmpty().isString(), body('image').not().isEmpty().isString(), validateFields],
    CheckRoleId.isAdmin, categoryController.updateCategoryById);
router.post('/', [body('name').not().isEmpty().isString(), validateFields], CheckRoleId.isAdmin, categoryController.createCategory);
router.get('/',[query('page').not().isEmpty().isInt({min:1}).optional(),CheckRoleId.isAdmin,
validateFields],categoryController.getAllCategories);
router.delete('/:id',CheckRoleId.isAdmin, categoryController.deleteCategory);
router.get('/:id',[CheckRoleId.isAdmin, param("id").isNumeric(), validateFields],categoryController.getCategoryById);



module.exports = router;
