'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 9000;

var secrets = require('./app/config/secrets.js');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(secrets.db.url);
require(__dirname + '/app/models/scoreboard.js');

require(__dirname + '/app/router/routes.js')(app);

app.listen(port);
console.log('App running on port ' + port);
module.exports = app;
