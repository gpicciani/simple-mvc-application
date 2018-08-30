var express = require('express');
var fetch = require("node-fetch");
var path = require("path");
var app = express();

// route pages
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/application.js', function (req, res) {
  res.sendFile(path.join(__dirname + '/application.js'));
});

// what port to run server on
app.listen(3001, function () {
  console.log('server started on port 3001');
});
