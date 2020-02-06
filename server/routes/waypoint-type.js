const express = require('express');
const router = express.Router();

const WaypointTypeController = require('../controllers/waypoint-type');
const UserController = require('../controllers/user');

/**
 * List all waypoint types.
 */
router.get('', UserController.authenticationMiddleware, WaypointTypeController.list);

/**
 * Create a new waypoint type.
 */
router.post('', UserController.authenticationMiddleware, WaypointTypeController.create);

module.exports = router;