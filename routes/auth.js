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

module.exports = router;
