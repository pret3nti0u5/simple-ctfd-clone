const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

mongoose.connect(`${uri}`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
