var express = require("express");
var router = express.Router();
const { body } = require("express-validator");
const { validateFields } = require("../helpers/validator");
const { getAll, register} = require("../controllers/memberController");
const { isAdmin } = require("../middleware/checkRole");

router.get("/",isAdmin, getAll);
router.post("/",[
    body('name').not().isEmpty().isString(),
    body('image').not().isEmpty().isString(),
    body('facebookUrl').not().isEmpty().isString().optional(),
    body('instagramUrl').not().isEmpty().isString().optional(),
    body('linkedinUrl').not().isEmpty().isString().optional(),
    body('description').not().isEmpty().isString().optional(),
    validateFields
], register);

module.exports = router;
