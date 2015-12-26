'use strict';

module.exports = function(app) {
  var path = require('path');
  var scoreboard = require(__dirname + '/scoreboard-controller.js');

  app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../../public/views/index.html'));
  })

  app.route('/scoreboard')
    .post(scoreboard.create)
    .get(scoreboard.list);

  app.route('/scoreboard/:scoreId')
    .get(scoreboard.read)
    .delete(scoreboard.delete);

  app.param('scoreId', scoreboard.scoreById);

}
