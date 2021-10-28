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

const assertArrayEqual = function(arr1, arr2) {
  if(eqArrays(arr1, arr2) === true){
    console.log(`✅✅Assertion Passed: ${JSON.stringify(arr1)} = ${JSON.stringify(arr2)}`);
  } else {
    console.log(`❌❌Assertion Failed: ${JSON.stringify(arr1)} != ${JSON.stringify(arr2)}`);
  }
}

const letterPositions =function (strValue) {
  const results = {};
  for (let i = 0; i < strValue.length; i++) {
    if(results[strValue[i]] === undefined){
      results[strValue[i]] = [];
    } 
    results[strValue[i]].push(i);
  }
  return results;
}

/*
const letterPositions =function (strValue) {
  const results = {};
  for (let i = 0; i < strValue.length; i++) {
    if(results[strValue[i]] === undefined){
      results[strValue[i]] = [i];
    } else {
      results[strValue[i]].push(i);
    }
    //console.log(strValue[i]);
    //console.log(`index of ${strValue[i]} is ${i}`)
    
    //results[strValue[i]].push(i);
  }
  return results;
}
*/

console.log(letterPositions("hello"));
//assertArrayEqual(letterPositions("hello")["h"], [0]);
assertArrayEqual(letterPositions("hello")["e"], [1]);
