/**
 * return new array of values
 * up to the last not-empty row
 * 
 * returns first row only 
 * if all rows are empty
 * 
 * @arr2d {array} of arrays
 * 
 * @return {array} of arrays
 */
// function test_trim_2d_down() {
//   var arr = [['ddd'], ['']];
//   var res = trim_2d_down_(arr);
//   console.log(res);
// }
function trim_2d_down_(arr2d) {
  var last = 0, row = [];
  var i = arr2d.length-1;
  var isRowEmpty_ = function(row) {
    var e = true;
    for (var i = 0; i < row.length; i++) {
      if (row[i] !== '') {
        e = false;
      }
    }
    return e;
  }
  while (i >= 0 && last === 0) {
    row = arr2d[i];
    if (!isRowEmpty_(row)) {
      last = i;
    }
    i--;
  } 
  var res = arr2d.slice(0, last+1);
  return res;
}



/**
 * converts 2d array to 1 d
 * direction: 
 * rows → columns
 * 
 * @arr2d {array} of arrays
 * 
 * @return {array}
 */
// function test_convert_2d_1d() {
//   var arr = [[1], [2], [2, 4]];
//   console.log(convert_2d_1d_(arr));
// }
function convert_2d_1d_(arr2d) {
  var res = [];
  for (var i = 0; i < arr2d.length; i++) {
    for (var ii = 0; ii < arr2d[i].length; ii++) {
      res.push(arr2d[i][ii]);
    }
  }
  return res;
}



/**
 * get array filled with value
 * 
 * @return {array}
 */
function get_1d_(val, len) {
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr.push(val);
  }
  return arr;
}



/**
 * Appends 2d array rows
 * to fixed width
 * fill with blancs
 * 
 * @return {array}
 */
// function test_scale_2d_width() {
//   var arr = [
//     [1,2,3],
//     [1,2],
//     [1]
//   ];
//   var res = scale_2d_width_(arr, 3);
//   console.log(res);
// }
function scale_2d_width_(arr, width) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    res.push(arr[i]);
  }
  var row = [];
  for (var i = 0; i < res.length; i++) {
    row = res[i];
    for (var ii = row.length; ii < width; ii++) {
      res[i].push('');
    }
  }
  return res;
}



/**
 * get missing numbers in array of numbers 
 * 
 * 
 * @arr {array} of numbers or blank cells
 * 
 * @retuen {array} of numbers or empty
 */
// function test_1d_missingnumbers() {
//   var arr = [2, 1, '', 5, 7, ''];
//   var res = get_1d_missingnumbers_(arr);
//   console.log(res); // [ 3, 4, 6 ]
// }
function get_1d_missingnumbers_(arr) {
  var min, max;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== '') {
      min = min || arr[i];
      max = max || arr[i];
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
    }
  }
  var res = [];
  for (var k = min; k <= max; k++) {
    if (arr.indexOf(k) === -1) {
      res.push(k);
    }
  }
  // console.log(min);
  // console.log(max);
  return res;
}