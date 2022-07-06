const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const { body } = require('express-validator');
const Validator = require('../helpers/validator');

router.post(
  '/login',
  [
    body('email').not().isEmpty().isEmail(),
    body('password').not().isEmpty(),
    Validator.validateFields,
  ],
  UserController.login
);

router.post(
  '/register',
  [
    body('firstName').not().isEmpty(),
    body('lastName').not().isEmpty(),
    body('email').not().isEmpty().isEmail(),
    body('image').isURL().optional(),
    body(
      'password',
      'Password must contain at least 8 characters, uppercase, lowercase, number and a symbol'
    ).isStrongPassword(),
    Validator.validateFields,
  ],
  UserController.register
);

module.exports = router;

