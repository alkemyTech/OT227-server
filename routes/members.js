var express = require("express");
var router = express.Router();
const { getAll} = require("../controllers/memberController");
const { isAdmin } = require("../middleware/checkRole");

router.get("/",isAdmin, getAll);

module.exports = router;
