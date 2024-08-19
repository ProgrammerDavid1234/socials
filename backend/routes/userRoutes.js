const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); // Middleware for authentication
const { loginUser, registerUser } = require('../controllers/userController'); // User controllers
const User = require('../models/User'); // User model

// @route   GET /users/me
// @desc    Get current user's data
// @access  Private
// routes/api/users.js
router.get('/me', auth, async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});


// @route   POST /users/login
// @desc    Login user and return token
// @access  Public
router.post('/login', loginUser);

// @route   POST /users/register
// @desc    Register a new user
// @access  Public
router.post('/register', registerUser);

// @route   GET /users/:userId
// @desc    Get user by ID
// @access  Public
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   PUT /users/:userId
// @desc    Update user by ID
// @access  Private
router.put('/:userId', auth, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
