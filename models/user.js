const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    googleId: {
      type: String,
      unique: true,
    },
    score: {
      type: Number,
    },
    solvedSet: [mongoose.Schema.Types.ObjectId],
  },
  {
    timestamps: true,
  }
);

userSchema.methods.updateSolvedSet = async function (
  challengeId,
  challengeScore
) {
  const user = this;
  if (user.solvedSet.includes(challengeId)) {
    return challengeId;
  }
  user.solvedSet.push(challengeId);
  user.score += challengeScore;
  await user.save();
  return challengeId;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
