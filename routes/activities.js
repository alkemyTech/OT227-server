var express = require('express');
var router = express.Router();
const activityController = require('../controllers/activityController');
const CheckRoleId = require('../middleware/checkRole');
const { param, body } = require('express-validator');
const { validateFields } = require('../helpers/validator');

router.put('/:id', activityController.modifyActiviy)

module.exports = router;