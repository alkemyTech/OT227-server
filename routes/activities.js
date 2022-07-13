var express = require('express');
var router = express.Router();
const activityController = require('../controllers/activityController');
const CheckRoleId = require('../middleware/checkRole');
const { body } = require('express-validator');
const { validateFields } = require('../helpers/validator');

router.get('/', CheckRoleId.isAdmin,activityController.getAllActivities);
router.post('/', [body('name').not().isEmpty().isString(), body('content').not().isEmpty().isString(), validateFields], CheckRoleId.isAdmin, activityController.createActivity);
router.put('/:id', CheckRoleId.isAdmin,activityController.modifyActiviy)


module.exports = router;
