const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.send('Hello js-koans!');
});

module.exports = app;
