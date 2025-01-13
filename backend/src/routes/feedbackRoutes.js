const express = require('express');
const { submitFeedback, getFeedback } = require('../controllers/feedbackController');
const router = express.Router();

router.post('/submit', submitFeedback);
router.get('/data', getFeedback);

module.exports = router;
