const eqArrays = function(arr1, arr2){
  if (arr1.length === arr2.length) {
    for(let i = 0; i < arr1.length; i++){
      if(arr1[i] !== arr2[i]){
        return false;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}

const assertArrayEqual = function(arr1, arr2) {
  if(eqArrays(arr1, arr2) === true){
    console.log(`✅✅Assertion Passed: ${JSON.stringify(arr1)} = ${JSON.stringify(arr2)}`);
  } else {
    console.log(`❌❌Assertion Failed: ${JSON.stringify(arr1)} != ${JSON.stringify(arr2)}`);
  }
}

eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3], [3, 2, 1]);
eqArrays(["1", "2", "3"], ["1", "2", "3"]);
eqArrays(["1", "2", "3"], ["1", "2", 3]);

assertArrayEqual([1, 2, 3], [1, 2, 3]);
assertArrayEqual([1, 2, 3], [3, 2, 1]);
assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArrayEqual(["1", "2", "3"], ["1", "2", 3]);

