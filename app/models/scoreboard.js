'use strict';

var mongoose = require('mongoose');

var scoreboardSchema = mongoose.Schema({
  name: String,
  score: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Scoreboard', scoreboardSchema);
