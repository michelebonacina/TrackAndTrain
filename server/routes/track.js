const express = require('express');
const router = express.Router();

const TrackController = require('../controllers/track');
const UserController = require('../controllers/user');

/**
 * List all tracks.
 */
router.get('', UserController.authenticationMiddleware, TrackController.list);

/**
 * Load a track by his identifier.
 */
router.get('/:id', UserController.authenticationMiddleware, TrackController.loadById);

module.exports = router;