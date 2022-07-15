const express = require ('express');
const router = express.Router();
const CommentsController = require('../controllers/commentsController');
const CheckRoleId = require('../middleware/checkRole');


router.get('/comments', CheckRoleId.isAdmin, CommentsController.getComments);  