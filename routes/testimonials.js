var express = require('express');
var router = express.Router();
const {update} = require('../controllers/testimonialsController');
const {isAdmin} = require('../middleware/checkRole');
const { body, param } = require('express-validator');
const { validateFields } = require('../helpers/validator');

router.put('/:id', [
    isAdmin,
    param('id').isInt().withMessage('Should be a number'),
    body('name').not().isEmpty().isString().withMessage('Not empty and should be a string'),
    body('content').not().isEmpty().isString().withMessage('Not empty and should be a string'),
    body('image').not().isEmpty().isString().optional(),
    validateFields
], update);

module.exports = router;