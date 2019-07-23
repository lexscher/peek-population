'use strict';

var _d = require('d3');

var d3 = _interopRequireWildcard(_d);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

document.addEventListener('DOMContentLoaded', function (event) {
  getYears();
});

function getYears() {
  var years = ['1950', '1955', '1960', '1965', '1970', '1975', '1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015', '2019'];
  console.log(document);
}

// d3.select('body').style('background-color', 'black');
// d3.select('body').style('color', 'white');
// d3.select('nav').style('background-color', '#010101');