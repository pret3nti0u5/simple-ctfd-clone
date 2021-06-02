const router = require('express').Router();
const User = require('../../models/user');
const authCheck = require('../../middleware/authCheck');

router.get('/', authCheck, async (req, res) => {
  try {
    const users = await User.find().sort({ score: 'desc', updatedAt: 'desc' });
    res.send(users);
  } catch (e) {
    res.status(500).send({ msg: 'Internal Server Error!' });
  }
});

module.exports = router;
