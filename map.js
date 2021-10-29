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

const map = function(arr, callback) {
  const answer = [];
  for (let item of arr) {
    answer.push(callback(item))
  }
  return answer;
}
const words = ["ground", "control", "to", "major", "tom"];
const result = map(words, word => word);
console.log(result);
assertArrayEqual(result, words)