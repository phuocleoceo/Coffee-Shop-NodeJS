const express = require('express');
const router = express.Router();
const menuController = require('../controllers/MenuController');

router.use('/', menuController.menu);

module.exports = router;