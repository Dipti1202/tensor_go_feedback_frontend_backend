const express = require('express');
const authRoutes = require('./routes/authRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();

app.use(express.json());

// Root route (optional, to test the server)
app.get('/', (req, res) => {
  res.send('Welcome to the Feedback Platform API!');
});

// Routes for auth and feedback
app.use('/auth', authRoutes);
app.use('/feedback', feedbackRoutes);

module.exports = app;
