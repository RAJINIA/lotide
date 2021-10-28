
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅Assertion Passed: ${actual} = ${expected}`);
  } else {
    console.log(`❌❌Assertion Failed: ${actual} != ${expected}`);
  }
};

const findKeyByValue = function (obj, value) {
  for(const key in obj) {
    if(obj[key] === value) {
      return key;
    }
  }
  return false;
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");