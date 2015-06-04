const fs = require('fs');
const path = require('path');
const md = require('markdown').markdown;

module.exports = {
  build_cat: function(cat_name) {
    return {
      instructions: md.toHTML(fs.readFileSync(path.join(__dirname, '../modules/', cat_name, '/README.md'), 'utf-8')),
      questions: fs.readFileSync(path.join(__dirname, '../data/js-assessment/app/', cat_name + '.js'), 'utf-8'),
      // tests: fs.readFileSync(__dirname + '/../data/js-assessment/tests/app/' + cat_name + '.js', 'utf-8'),
      solutions: fs.readFileSync(path.join(__dirname, '../data/js-assessment-answers/app/', cat_name + '.js'), 'utf-8')
    }
  }
};
