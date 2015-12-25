'use strict';

var mongoose = require('mongoose');
var Scoreboard = mongoose.model('Scoreboard');

module.exports = {
  create: function(req, res, next) {
    var score = new Scoreboard({
      name: req.body.name,
      score: req.body.score
    });
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
    Scoreboard.find({}, null, { sort: { score: -1 } }, function(err, scores) {
      if(err) {
        return next(err);
      }
      else {
        res.json(scores);
      }
    })
  }
}
