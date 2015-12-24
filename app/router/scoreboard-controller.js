'use strict';

var mongoose = require('mongoose');
var Scoreboard = mongoose.model('Scoreboard');

module.exports = {
  create: function(req, res, next) {
    var score = new Scoreboard(req.body);
    score.save(function(err) {
      if(err) {
        console.log(err);
        return next(err);
      }
      else {
        console.log('Added new high score:');
        console.log(score);
        res.json(score);
      }
    })
  },
  list: function(req, res, next) {
    Scoreboard.find({}, function(err, scores) {
      if(err) {
        return next(err);
      }
      else {
        res.json(scores);
      }
    })
  }
}
