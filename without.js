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

const assertArraysEqual = function(arr1, arr2) {
  if(eqArrays(arr1, arr2) === true){
    console.log(`✅✅Assertion Passed: ${JSON.stringify(arr1)} = ${JSON.stringify(arr2)}`);
  } else {
    console.log(`❌❌Assertion Failed: ${JSON.stringify(arr1)} != ${JSON.stringify(arr2)}`);
  }
}

const without = function (array, valueToRemove) {
  let result = [];
  let resultRemoved = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] !== valueToRemove[i]){
      result.push(array[i]);
      //console.log(result);
    } else {
      resultRemoved.push(array[i]);
      //console.log(resultRemoved);
    }
  }
  return result;

}

// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));

assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);