const express = require('express');
const router = express.Router();

const ActivityController = require('../controllers/activity');

/**
 * List all activities.
 */
router.get('', ActivityController.list);

/**
 * Create a new activity.
 */
router.post('', ActivityController.create);

module.exports = router;