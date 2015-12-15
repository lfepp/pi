'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var secrets = require('./app/config/secrets.js');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

mongoose.connect(secrets.db.url);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
})

app.listen(process.env.PORT || 9000);
module.exports = app;
