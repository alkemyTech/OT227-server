var express = require('express');
var router = express.Router();

const { body } = require("express-validator");
const { register, getContacts } = require('../controllers/contactsController');
const { validateFields } = require("../helpers/validator");
const CheckRoleId = require('../middleware/checkRole');

router.post('/', [
    body("name").not().isEmpty().isString().withMessage("name is required and should be a string"),
    body("email").not().isEmpty().isEmail().withMessage("email is required and should be a valid email"),
    body("phone").not().isEmpty().isNumeric().withMessage("phone should be a number and not empty").optional(),
    body("message").not().isEmpty().withMessage("message should be a string and not empty").optional(),
    validateFields
],register);

router.get('/',CheckRoleId.isAdmin, getContacts);


module.exports = router;

