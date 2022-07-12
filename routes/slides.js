const express = require('express');
const router = express.Router();
const { param } = require("express-validator");
const {getById, deleteById} = require('../controllers/slideController');
const { isAdmin } = require("../middleware/checkRole");
const { validateFields } = require("../helpers/validator");

router.get('/:id',[
    isAdmin,
    param('id').isNumeric(),
    validateFields
], getById);

router.delete('/:id',[
    isAdmin,
    param('id').isNumeric(),
    validateFields
], deleteById);


module.exports = router;