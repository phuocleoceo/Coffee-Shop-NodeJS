const express = require('express');
const router = express.Router();
const menuController = require('../controllers/MenuController');

router.get('/', menuController.menu);

module.exports = router;