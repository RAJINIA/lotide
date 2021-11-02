const { assert } = require('chai');
const assertEqual = require('../assertEqual');
const head = require('../head');

//TESTCODE
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
}); 

describe("#head", () => {
  it("returns 'Hello' for [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
  });
}); 

