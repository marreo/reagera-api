const mongoose = require('mongoose');

const relationSchema = new mongoose.Schema({
  users: [{
    type: String,
    ref: "User"
  }],
  start: Date
});

const Relation = mongoose.model('Relation', relationSchema);

module.exports = Relation;