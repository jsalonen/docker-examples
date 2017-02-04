var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send(`Hello from backend! We are running in "${process.env.NODE_ENV}"`);
});

app.listen(3000, function () {
  console.log('Express server listening on port 3000!')
});
