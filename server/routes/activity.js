const express = require('express');
const router = express.Router();

const ActivityController = require('../controllers/activity');

/**
 * List all activities.
 */
router.get('', ActivityController.list);

module.exports = router;