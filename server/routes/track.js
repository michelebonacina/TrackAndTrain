// == libraries ==
const express = require('express');
const router = express.Router();

// == controllers ==
const TrackController = require('../controllers/track');

// == routes ==
// list all tracks
router.get('', TrackController.list);

// load a single track
router.get('/:id', TrackController.load);

module.exports = router;