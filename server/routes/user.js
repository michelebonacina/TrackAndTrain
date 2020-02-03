const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user');

/**
 * Authenticate a user.
 */
router.post('/login', UserController.login);

/**
 * Register a new user.
 */
router.post('/register', UserController.register);

module.exports = router;