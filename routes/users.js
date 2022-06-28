var express = require("express");
var router = express.Router();
const UserController = require('../controllers/userController');
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.delete('/:id', UserController.deleteUserById);

router.get('/', CheckRoleId.isAdmin, UserController.getAllUsers);

module.exports = router;
