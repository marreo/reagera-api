const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
  user: {
    type: String,
    ref: "User"
  },
  posted: Date,
  text: String
});

const Status = mongoose.model('Status', statusSchema);

module.exports = Status;