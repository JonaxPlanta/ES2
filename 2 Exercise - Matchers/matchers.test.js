// Imports
const {toSum, 
       toSubtract, 
       toSayHello, 
       toCreateList, 
       toReturnTrue} = require("./matchers");

// 5 Matchers in Jest:
// - 2 for numbers
// - 1 for string
// - 1 for array
// - 1 for general

// Number matchers tests
// - toBe() : compare primitive values or check referential identity of object instances
test("[SUM]: 1 + 2 must be 3.", () => {
    expect(toSum(1, 2)).toBe(3);
});

// - toBeCloseTo() : compare floating point numbers for approximate equality
test("[SUBTRACT]: 1.5 - 0.2 must be close to 1.3.", () => {
    expect(toSubtract(1.5, 0.2)).toBeCloseTo(1.3);
});

// String matcher test
// - toMatch() : check that a string matches a regular expression
test("[STRING]: Must return 'Hello'.", () => {
    expect(toSayHello()).toMatch("Hello");
});

// Array matcher test
// - toHaveLength() : check that an object has a '.length' property and it is set to a certain numeric value
test("[ARRAY]: Must have 4 of length.", () => {
    expect(toCreateList("some", "some", "some", "some")).toHaveLength(4);
});

// General matcher test
// - toBeTruthy() : check that a variable is not undefined
test("[BOOLEAN]: Must return true.", () => {
    expect(toReturnTrue()).toBeTruthy();
});