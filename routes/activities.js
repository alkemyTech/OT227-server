var express = require('express');
var router = express.Router();
const activityController = require('../controllers/activityController');

router.get('/', activityController.getAllActivities);


module.exports = router;
