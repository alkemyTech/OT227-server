const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const { body, validationResult } = require('express-validator');

router.post(
  '/login',
  [
    body('email').not().isEmpty().isEmail(),
    body('password').not().isEmpty(),
    (req, res, next) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json(errors);
      }

      next();
    },
  ],
  UserController.login
);

module.exports = router;
