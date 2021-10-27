const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅Assertion Passed: ${actual} = ${expected}`);
  } else {
    console.log(`❌❌Assertion Failed: ${actual} != ${expected}`);
  }
};

const countLetters = function (strValue) {
  let countedObject = {};
  for (const value of strValue) {
    
    //countedObject[strValue[value]] = 0;
    countedObject[value] = countedObject[value] + 1 || 1;

  }
  return countedObject;
}

console.log(countLetters('lighthouse in the house'));