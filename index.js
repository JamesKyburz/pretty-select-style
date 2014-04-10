var insertCss = require('insert-css');
var fs = require('fs');

!function selectStyle() {
  var svg = fs.readFileSync(__dirname + '/index.html').toString('base64');
  var css = fs.readFileSync(__dirname + '/style.css').toString().replace(
    /\#\{backgroundUrl\}/g,
    'data:image/svg+xml;base64,' + svg
  );
  insertCss(css);
}();
