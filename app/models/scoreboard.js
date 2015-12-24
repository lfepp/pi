'use strict';

var mongoose = require('mongoose');

var scoreboardSchema = mongoose.Schema({
  name: String,
  score: Number,
  rank: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Scoreboard', scoreboardSchema);
