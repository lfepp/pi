'use strict';

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
})

app.listen(process.env.PORT || 9000);
module.exports = app;
