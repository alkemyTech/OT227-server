const express = require("express");
const router = express.Router();
const { param } = require("express-validator");
const {
  getById,
  deleteById,
  modifySlideById,
} = require("../controllers/slideController");
const { isAdmin } = require("../middleware/checkRole");
const { validateFields } = require("../helpers/validator");



router.put("/:id", [isAdmin , param("id").isNumeric(), validateFields], modifySlideById);

module.exports = router;
