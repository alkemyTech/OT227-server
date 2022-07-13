var express = require('express');
var router = express.Router();
const activityController = require('../controllers/activityController');
const CheckRoleId = require('../middleware/checkRole');

router.get('/', CheckRoleId.isAdmin,activityController.getAllActivities);


module.exports = router;
