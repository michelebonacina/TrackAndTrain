const express = require('express');
const router = express.Router();

const TrackController = require('../controllers/track');

/**
 * List all tracks.
 */
router.get('', TrackController.list);

/**
 * Load a track by his identifier.
 */
router.get('/:id', TrackController.loadById);

module.exports = router;