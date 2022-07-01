var express = require('express');
var router = express.Router();
const {body} = require('express-validator');
const {updateOrganization} = require('../controllers/organizationController');
const {validateFields} = require('../helpers/validator');
const {isAdmin}= require('../middleware/checkRole');

router.post('/',[
    isAdmin,
    body('name').not().isEmpty().isString().optional(),
    body('image').not().isEmpty().isString().optional(),
    body('phone').not().isEmpty().isNumeric().optional(),
    body('address').not().isEmpty().isString().optional(),
    validateFields
],updateOrganization);

module.exports = router;