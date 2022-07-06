const express = require('express');
const router = express.Router();
const { param } = require("express-validator");
const {getById} = require('../controllers/slideController');
const { isAdmin } = require("../middleware/checkRole");
const { validateFields } = require("../helpers/validator");

router.get('/:id',[
    isAdmin,
    param('id').isNumeric(),
    validateFields
], getById);


module.exports = router;