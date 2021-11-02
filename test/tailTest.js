const { assert } = require('chai');
const assertEqual = require('../assertEqual');
const tail = require('../tail');



//TEST CODE
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); // => will always fail!
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2); // ensure we get back two elements
// assertEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(tail(["Hello", "Lighthouse", "Labs"])[1], "Labs"); // ensure second element is "Labs"

describe("tail", () => {
  it("returns [Lighthouse, Labs] for [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  });
});

describe("tail", () => {
  it("returns 2 for [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2)
  });
});

describe("tail", () => {
  it("returns 'Lighthouse' for [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse");
  });
});

describe("tail", () => {
  it("returns 'Labs' for [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[1], "Labs");
  });
});

