const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;  // <-- Add this line
const jwt = require('jsonwebtoken');

// Configure the Google OAuth strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  // Handle the profile and pass it to done()
  done(null, profile);
  
}));

exports.googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

exports.googleCallback = (req, res) => {
  passport.authenticate('google', { failureRedirect: '/' }, (err, user, info) => {
    if (err || !user) {
      return res.redirect('/'); // Redirect to home page if authentication fails
    }

    const token = jwt.sign({ userId: user.id, username: user.displayName }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

    res.redirect('http://localhost:3000/home');
  })(req, res);
};
