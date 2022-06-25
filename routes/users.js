var express = require('express');
var router = express.Router();
const UserController = require('../controllers/userController');
const { body } = require('express-validator');
const Validator = require('../helpers/validator');
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.delete('/:id', UserController.deleteUserById);
router.patch('/:id', [
  body('firstName').not().isEmpty().isString().optional(),
  body('lastName').not().isEmpty().isString().optional(),
  body('email').not().isEmpty().isEmail().optional(),
  body(
    'password',
    'Password must contain at least 8 characters, uppercase, lowercase, number and a symbol'
  ).isStrongPassword().optional(),
  Validator.validateFields,
],UserController.userUpdate);

module.exports = router;
