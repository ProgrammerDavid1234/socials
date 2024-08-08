// backend/routes/userRoutes.js
const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');

const router = express.Router();

// @route  POST api/users/register
// @desc   Register user
// @access Public
router.post('/register', registerUser);

// @route  POST api/users/login
// @desc   Login user
// @access Public
router.post('/login', loginUser);

module.exports = router;
