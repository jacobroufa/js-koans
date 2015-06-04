const path = require('path');

const express = require('express');
const app = express();

const require_tree = require('require-tree');
const modulePath = path.join(__dirname, 'modules');
const categories = require_tree(modulePath);

app.use(express.static('public'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
  res.render('index');
});

app.get('/:category', function(req, res){
  res.send(JSON.stringify(categories[req.params.category]));
});

module.exports = app;
