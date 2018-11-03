const mongoose = require('mongoose');

const relationSchema = new mongoose.Schema({
  friend1: String,
  friend2: String,
  start: Date
});

const Relation = mongoose.model('Relation', relationSchema);

module.exports = Relation;
