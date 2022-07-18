const express = require ('express');
const router = express.Router();
const CommentsController = require('../controllers/commentsController');
const Validator = require('../helpers/validator');
const { body } = require('express-validator');

router.post('/comments', [
  body('comment', 'comment is required').not().isEmpty(),
  body('newsId', 'newsId is required').not().isEmpty(),
  body('userId', 'userId is required').not().isEmpty(),
  Validator.validateFields
], CommentsController.createComment);

module.exports = router;
