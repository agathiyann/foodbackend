const express = require('express');
const router = express.Router();
const { getDishes, togglePublishedStatus } = require('../controllers/dishController');

router.route('/').get(getDishes);
router.route('/:id/toggle').put(togglePublishedStatus);

module.exports = router;
