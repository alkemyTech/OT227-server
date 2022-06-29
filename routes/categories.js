var express = require('express');
var router = express.Router();
const categoryController = require('../controllers/categoryController');
const CheckRoleId = require('../middleware/checkRole');

router.get('/',CheckRoleId.isAdmin,categoryController.getAllCategories);


module.exports = router;