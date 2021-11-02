const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅Assertion Passed: ${actual} = ${expected}`);
  } else {
    console.log(`❌❌Assertion Failed: ${actual} != ${expected}`);
  }
};

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
    //console.log('same length');
    for(const key1 in object1){  
      for(const key2 in object2) {
        console.log(`${key1} & data type: ${typeof(object1[key1])}`);
        console.log(`${key2} & data type: ${typeof(object2[key2])}`);
        if (key1 === key2){    
          if(typeof(object1[key1]) === 'object' && typeof(object2[key2]) === 'object') {
            eqArrays(object1[key1], object2[key2]);
            console.log(eqArrays(object1[key1], object2[key2]));
            if (eqArrays(object1[key1], object2[key2])) {
              result += 1;
              console.log(result);
            }

          } else if(object1[key1] === object2[key2]){                  // checking if keys of object's are same
            console.log('values are equal');               // checking if values of keys of object's are same
            result += 1;
            console.log(result);
          } //else {
            //console.log('values are different');
          //}        
        } //else {
          //console.log('keys are different');
        //}
      } 
    } 
    //console.log(result); 
    if (result === Object.keys(object1).length) {
      return true;
    } else {
      return false;
    }
    
    }  else {
        //console.log('different length');
        return false;
    }  
  } 

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//console.log(eqObjects(cd, dc)); // => true
assertEqual(eqObjects(cd, dc), true)

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);






/*
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
  */