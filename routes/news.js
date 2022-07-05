var express = require('express');
var router = express.Router();
const { param , body} = require('express-validator');
const {validateFields} = require('../helpers/validator');
const {isAdmin} = require('../middleware/checkRole');
const {getById, createNew} =require('../controllers/newsController');

router.post('/', [
    body('name').not().isEmpty().withMessage('name is required'),
    body('description').not().isEmpty().withMessage('description is empty'),
    body('image').not().isEmpty().withMessage('image is required'),
    body('content').not().isEmpty().withMessage('content is required'),
    body('categoryId').not().isEmpty().withMessage('categoryId is required'),
    validateFields
], createNew);

router.get('/:id',[
    isAdmin,
    param('id').isNumeric(),
    validateFields
],getById);




module.exports = router;