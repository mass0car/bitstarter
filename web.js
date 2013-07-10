var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

var getContent = function(filename) {
  var buffer = fs.readFileSync( ilename);
  return buffer.toString();
};

app.get('/', function(request, response) {
  response.send(getContent('index.html'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
