var express = require('express');
var router = express.Router();
const {register} = require('../controllers/testimonialsController');
const {isAdmin} = require('../middleware/checkRole');
const { body } = require('express-validator');
const { validateFields } = require('../helpers/validator');

router.post('/', [
    body('name').not().isEmpty().isString().withMessage('Not empty and should be a string'),
    body('content').not().isEmpty().isString().withMessage('Not empty and should be a string'),
    body('image').not().isEmpty().isString().optional(),
    validateFields
], register);

module.exports = router;