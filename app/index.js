const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

const modulePath = path.join(__dirname, 'modules');
const categories = fs.readdirSync(modulePath);

const util = require('./util');

app.use(express.static('public'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/:category', function(req, res){
  cat_obj = util.build_cat(req.params.category);
  res.render('category', { category: cat_obj })
});

app.get('/', function(req, res){
  res.render('index', { categories: categories });
});

module.exports = app;
