var express = require("express");
var router = express.Router();
const { body, param } = require("express-validator");
const { validateFields } = require("../helpers/validator");
const { getAll, register, updateMemberById } = require("../controllers/memberController");
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

router.put("/:id", [
    isAdmin,
    param("id").isNumeric(),
    body("name").not().isEmpty().isString(),
    body("image").not().isEmpty().isString(),
    body("facebookUrl").not().isEmpty().isString().optional(),
    body("instagramUrl").not().isEmpty().isString().optional(),
    body("linkedinUrl").not().isEmpty().isString().optional(),
    body("description").not().isEmpty().isString().optional(),
    validateFields], updateMemberById);

module.exports = router;
