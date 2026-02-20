const express = require('express');
const router = express.Router();
const tagsController = require('../controllers/tagsController');

router.get('/', tagsController.getTags);
//router.post('/:id/click', tagsController.incrementTagCount);

module.exports = router;
