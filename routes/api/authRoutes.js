const router = require('express').Router();
const passport = require('passport');

router.get(
  '/login',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/login/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  }
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
