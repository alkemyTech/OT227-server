const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const { body } = require('express-validator');

router.post(
  '/login',
  body('email').isEmail(),
  body('password').not().isEmpty(),
  UserController.login
);

module.exports = router;
