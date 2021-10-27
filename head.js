const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} = ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} != ${expected}`);
  }
}

const head = function (arr) {
  let x = 0;
  x = arr.shift();
  console.log(x);
  return x;
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
