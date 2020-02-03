const express = require('express');
const router = express.Router();

const ActivityController = require('../controllers/activity');
const UserController = require('../controllers/user');

/**
 * List all activities.
 */
router.get('', UserController.authenticationMiddleware, ActivityController.list);

/**
 * Create a new activity.
 */
router.post('', UserController.authenticationMiddleware, ActivityController.create);

module.exports = router;