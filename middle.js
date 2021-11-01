const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅Assertion Passed: ${actual} = ${expected}`);
  } else {
    console.log(`❌❌Assertion Failed: ${actual} != ${expected}`);
  }
};

const eqArrays = function(arr1, arr2){
  if(!arr1.length || !arr2.length) return true
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
  console.log(arr1, arr2);
  if(eqArrays(arr1, arr2) === true){
    console.log(`✅✅Assertion Passed: ${JSON.stringify(arr1)} = ${JSON.stringify(arr2)}`);
  } else {
    console.log(`❌❌Assertion Failed: ${JSON.stringify(arr1)} != ${JSON.stringify(arr2)}`);
  }
}

const middle = function(arr) {
  let newArr = arr;
  let arrayLength = arr.length;
  //console.log(arrayLength);
  let half = arrayLength / 2;
  //console.log(half);
  let result = [];
  if (arrayLength === 1 || arrayLength === 2){
    //console.log(result);
    return result;
  } else if (arrayLength % 2 !== 0) {
    for (let i = 0; i < half - 1; i++) {
      arr.pop();
    }
    //console.log(arr);
    let newArrayLength = newArr.length;
    //console.log(newArrayLength);
    //console.log(arr[newArrayLength - 1]);
    result.push(newArr[newArrayLength - 1]);
    //console.log(result);
    return result;
  } else {
    let middleNum1 = newArr[half];
    //console.log(middleNum1);
    let middleNum2 = newArr[half - 1];
    result.push(middleNum2);
    result.push(middleNum1);
    //console.log(middleNum2);
    //console.log(result);
    return result;
  } 
};

//console.log(middle([1]));
//console.log(middle([1, 2]));
//console.log(middle([1, 2, 3]));
// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2, 3, 4]));
// console.log(middle([1, 2, 3, 4, 5, 6]));

assertArrayEqual(middle([1]), []);
assertArrayEqual(middle([1, 2]), []);
assertArrayEqual(middle([1, 2, 3]), [2]);
assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);