const fs = require('fs');

module.exports = {
  build_cat: function(cat_name) {
    return {
      instructions: fs.readFileSync(__dirname + '/../modules/' + cat_name + '/README.md', 'utf-8'),
      questions: fs.readFileSync(__dirname + '/../data/js-assessment/app/' + cat_name + '.js', 'utf-8'),
      // tests: fs.readFileSync(__dirname + '/../data/js-assessment/tests/app/' + cat_name + '.js', 'utf-8'),
      solutions: fs.readFileSync(__dirname + '/../data/js-assessment-answers/app/' + cat_name + '.js', 'utf-8')
    }
  }
};
