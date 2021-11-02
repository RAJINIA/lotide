const eqArrays = function(v1, v2){
  //console.log(v1);
  //console.log(v2);
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

const eqObjects = function(object1, object2) {
  let result = 0; 
  if(Object.keys(object1).length === Object.keys(object2).length) {   //checking object's length are same
    for(const key1 in object1){  
      for(const key2 in object2) {
        if (key1 === key2){    
          if(typeof(object1[key1]) === 'object' && typeof(object2[key2]) === 'object') {
            if (eqArrays(object1[key1], object2[key2])) {
              result += 1;
            }

          } else if(object1[key1] === object2[key2]){                  // checking if keys of object's are same
            //console.log('values are equal');               // checking if values of keys of object's are same
            result += 1;
          }        
        } 
      } 
    } 
    if (result === Object.keys(object1).length) {
      return true;
    } else {
      return false;
    }
    
    }  else {
        return false;
    }  
  } 
  
const assertObjectsEqual = function(actual, expected) {
  if(eqObjects(actual, expected) === true) {
    console.log(`✅✅Assertion Passed: ${actual} = ${expected}`);
  } else {
    console.log(`❌❌Assertion Failed: ${actual} != ${expected}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//console.log(eqObjects(cd, dc)); // => true
assertObjectsEqual(eqObjects(cd, dc), true)

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false);
