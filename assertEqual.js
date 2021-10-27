const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`String.fromCodePoint(0x2705) String.fromCodePoint(0x2705) Assertion Passed: ${actual} === ${expected}`);
    //console.log(String.fromCodePoint(0x2705) + String.fromCodePoint(0x2705) +  "Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log(`String.fromCodePoint(0x1F534)  String.fromCodePoint(0x1F534) Assertion Failed: ${actual} !== ${expected}`);
    //console.log(String.fromCodePoint(0x1F534) + String.fromCodePoint(0x1F534) + "Assertion Failed: " + actual + " !== " + expected);
    : 
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Bootcamp", "Bootcamp");
assertEqual("bootcamp", "Bootcamp");
assertEqual(1, 100);


