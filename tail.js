const assertEqual = require('./assertEqual');

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed: ${actual} = ${expected}`);
//   } else {
//     console.log(`Assertion Failed: ${actual} != ${expected}`);
//   }
// };

// challenge 1
const tail = function(arr) {
  console.log(arr);
  arr.shift();
  //console.log(arr);
  return arr;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);

//TEST CODE
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"


// challenge 2
/*const tail = function (arr) {
  let newArr = [];
  for(const values of arr){
    newArr.push(values);
  }
  //console.log(newArr);
  //newArr.shift();
  //console.log(newArr);
  //console.log(arr);
  return newArr;
}
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
*/

module.exports = tail;


