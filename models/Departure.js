const mongoose = require('mongoose');

const departureSchema = new mongoose.Schema({
  destination: String,
  time: Date
});

const Departure = mongoose.model('Departure', departureSchema);

module.exports = Departure;
