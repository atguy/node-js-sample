var express = require('express');

var app = express.createServer(express.logger());

/*
var fs=require('fs');
fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
respond.send(data.toString());
});
*/

app.get('/', function(request, response) {
  response.send('Hello World 2!');
var fs=require('fs');
fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
respose.send(data.toString());
});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
