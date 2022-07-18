var express = require("express");
var router = express.Router();
const UserController = require('../controllers/userController');
const { body } = require('express-validator');
const Validator = require('../helpers/validator');
const CheckRoleId = require('../middleware/checkRole');

router.delete('/:id', CheckRoleId.isAdmin, UserController.deleteUserById);
router.patch('/:id', [
  CheckRoleId.isAdmin,
  body('firstName').not().isEmpty().isString().optional(),
  body('lastName').not().isEmpty().isString().optional(),
  body('email').not().isEmpty().isEmail().optional(),
  body(
    'password',
    'Password must contain at least 8 characters, uppercase, lowercase, number and a symbol'
  ).isStrongPassword().optional(),
  Validator.validateFields,
], UserController.userUpdate);

router.get('/', CheckRoleId.isAdmin, UserController.getAllUsers);

module.exports = router;
