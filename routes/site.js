const express = require('express');
const router = express.Router();
const siteController = require('../controllers/SiteController');

//use route to call get/post method
router.use('/about',siteController.about);
router.use('/store',siteController.store);
router.use('/', siteController.home);

module.exports = router;

