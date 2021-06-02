const mongoose = require('mongoose');

const challengeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  flag: {
    type: String,
    required: true,
    trim: true,
  },
  score: {
    type: Number,
    required: true,
    trim: true,
  },
  challengelink: {
    type: String,
    trim: true,
  },
  challengefile: {
    type: String,
    trim: true,
  },
});

challengeSchema.methods.toJSON = function () {
  const challenge = this;
  const challengeObject = challenge.toObject();
  delete challengeObject.flag;
  return challengeObject;
};

const Challenge = mongoose.model('Challenge', challengeSchema);

module.exports = Challenge;
