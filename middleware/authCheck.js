const authCheck = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({ msg: 'Not Logged in!' });
  } else {
    next();
  }
};

module.exports = authCheck;
