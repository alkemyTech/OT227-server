var express = require('express');
var router = express.Router();
const {deleteById} = require('../controllers/testimonialsController');
const {isAdmin} = require('../middleware/checkRole');
const { param } = require('express-validator');
const { validateFields } = require('../helpers/validator');

router.delete('/:id', [
    isAdmin,
    param('id').isInt().withMessage('Should be a number'),
    validateFields
], deleteById );

module.exports = router;