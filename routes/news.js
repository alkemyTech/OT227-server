var express = require('express');
var router = express.Router();
const {isAdmin} = require('../middleware/checkRole');
const {getById} =require('../controllers/newsController');

router.get('/:id',isAdmin,getById);

module.exports = router;