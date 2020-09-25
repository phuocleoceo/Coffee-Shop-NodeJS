const express = require('express');
const router = express.Router();
const menuController = require('../controllers/MenuController');

router.get('/create', menuController.create);   //Render create page
router.post('/create', menuController.store);   //Submit drinks (store:luu tru)
router.get('/:slug', menuController.show);
router.get('/', menuController.menu);
 
module.exports = router;