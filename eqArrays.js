const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅Assertion Passed: ${actual} = ${expected}`);
  } else {
    console.log(`❌❌Assertion Failed: ${actual} != ${expected}`);
  }
};


const eqArrays = function(v1, v2){
  console.log(v1);
  console.log(v2);
  if (v1.length === v2.length) {
    for(let i = 0; i < v1.length; i++){
      if(v1[i] !== v2[i]){
        return false;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);