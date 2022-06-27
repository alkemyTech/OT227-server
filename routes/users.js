var express = require('express');
var router = express.Router();
const UserController = require('../controllers/userController');
const CheckRoleId = require('../middleware/checkRole');

router.delete('/:id', UserController.deleteUserById);

router.get('/', CheckRoleId.isAdmin, UserController.getAllUsers);

module.exports = router;
