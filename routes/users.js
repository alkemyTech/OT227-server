var express = require("express");
var router = express.Router();
const { createJWTToken } = require("../util/authUtil");
const bcrypt = require("bcrypt");
const { authenticate } = require("../middlewares/authMiddleware");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/login", async (req, res) => {
  try {
    const user = { email: "user@mail.com", password: "userPassword" };

    const token = createJWTToken({ user });

    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ err });
  }
});

router.get("/protected", authenticate, async (req, res) => {
  res.send("protected");
});


module.exports = router;
