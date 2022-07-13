var express = require("express");
var router = express.Router();
const { param, body } = require("express-validator");
const { validateFields } = require("../helpers/validator");
const { getById, createNew, deleteById, updateNewById } = require("../controllers/newsController");
const { isAdmin } = require("../middleware/checkRole");

router.post(
  "/",
  [
    isAdmin,
    body("name").not().isEmpty().withMessage("name is required"),
    body("description").not().isEmpty().withMessage("description is empty"),
    body("image").not().isEmpty().withMessage("image is required"),
    body("content").not().isEmpty().withMessage("content is required"),
    body("categoryId").not().isEmpty().withMessage("categoryId is required"),
    validateFields,
  ],
  createNew
);

router.get("/:id", [isAdmin, param("id").isNumeric(), validateFields], getById);

router.delete(
    "/:id",
    [isAdmin, param("id").isNumeric(), validateFields],
    deleteById
);

router.put("/:id", [
    isAdmin,
    param("id").isNumeric(),
    body("name").not().isEmpty().isString(),
    body("image").not().isEmpty().isString(),
    body("content").not().isEmpty().isString(),
    body("categoryId").not().isEmpty(),
    validateFields
  ],
  updateNewById
);

module.exports = router;
