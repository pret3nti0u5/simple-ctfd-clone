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

// app.get('*', (req, res) => {
//   res.send('Uh oh get slammed');
// });

// app.use(express.static('client/build'));
app.set('views', path.join(__dirname, 'client', 'build'));
app.engine('html', require('ejs').renderFile);

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });

app.use(
  '/static',
  express.static(path.join(__dirname, 'client', 'build', 'static'))
);

app.get('/', function (req, res) {
  res.render('index.html', { PORT });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
