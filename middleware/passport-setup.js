const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user');

passport.serializeUser((user, done) => {
  try {
    done(null, user.googleId);
  } catch (e) {
    done(e);
  }
});

passport.deserializeUser(async (googleId, done) => {
  try {
    const user = await User.findOne({ googleId });
    done(null, user);
  } catch (e) {
    done(e);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
      callbackURL: `${
        process.env.NODE_ENV === production
          ? 'https://simple-ctfd-clone.herokuapp.com/login/callback'
          : '/login/callback'
      }`,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await User.findOne({ googleId: profile.id });
        if (!user) {
          const newUser = new User({
            name: profile.displayName,
            email: profile._json.email,
            googleId: profile.id,
            score: 0,
          });
          await newUser.save();
          return done(null, newUser);
        }
        return done(null, user);
      } catch (e) {
        return done(e);
      }
    }
  )
);
