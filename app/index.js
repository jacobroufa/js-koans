const express = require('express');
const app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
  res.render('index');
});

module.exports = app;
