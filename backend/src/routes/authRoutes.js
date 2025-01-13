const express = require('express');
const { googleAuth, googleCallback } = require('../controllers/authController');
const router = express.Router();

// Google login
router.get('/google', googleAuth);

// Google OAuth callback
router.get('/google/callback', googleCallback);

module.exports = router;
