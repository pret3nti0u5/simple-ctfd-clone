const router = require('express').Router();
const Challenge = require('../../models/challenge');
const authCheck = require('../../middleware/authCheck');
const User = require('../../models/user');

router.get('/', authCheck, async (req, res) => {
  try {
    const challengesArr = {};
    const challenges = await Challenge.find().sort({ category: 'asc' });
    const categoryKeys = await Challenge.find()
      .sort({ category: 'asc' })
      .distinct('category');
    categoryKeys.map((key) => {
      let arr = challenges.filter((challenge) => challenge.category === key);
      challengesArr[key] = arr;
    });
    res.send(challengesArr);
  } catch (e) {
    res.status(500).send({ msg: 'Internal Server Error!' });
  }
});

router.post('/solution/:id', authCheck, async (req, res) => {
  try {
    const _id = req.params.id;
    const { id, flag } = req.body;
    const challenge = await Challenge.findOne({ _id, flag });
    if (!challenge) {
      return res.status(400).send({ msg: 'Nope, shit out of luck!' });
    }
    const user = await User.findById(id);
    await user.updateSolvedSet(challenge._id, challenge.score);
    res.send({ msg: `Congrats! Solved ${challenge.name}` });
  } catch (e) {
    res.status(500).send({ msg: 'Internal Server Error!' });
  }
});

router.post('/', authCheck, async (req, res) => {
  try {
    const challenge = new Challenge(req.body);
    await challenge.save();
    res.status(201).send(challenge);
  } catch (e) {
    res.status(400).send({ msg: 'Bad Request!' });
  }
});

module.exports = router;
