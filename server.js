const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const cors = require('cors');
const path = require('path');
require('./db/mongoose');
require('./middleware/passport-setup');
const leaderboardsRoutes = require('./routes/api/leaderboardsRoutes.js');
const challengesRoutes = require('./routes/api/challengesRoutes.js');
const authRoutes = require('./routes/api/authRoutes.js');
const userRoutes = require('./routes/api/userRoutes.js');

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(
  cookieSession({
    maxAge: 4 * 60 * 60 * 1000,
    keys: [process.env.cookieKey],
  })
);
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use('/api/leaderboards', leaderboardsRoutes);
app.use('/api/challenges', challengesRoutes);
app.use('/api/user', userRoutes);
app.use(authRoutes);

if (process.env.NODE_ENV === 'development') {
  app.get('*', (req, res) => {
    res.send('Move back to localhost:3000');
  });
}

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
