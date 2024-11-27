// 5 Matchers in Jest:
// - 2 for numbers
// - 1 for string
// - 1 for array
// - 1 for general

// Number matchers methods
// - toBe() : compare primitive values or check referential identity of object instances
const toSum = (a, b) => {
    return a + b;
};

// - toBeCloseTo() : compare floating point numbers for approximate equality
const toSubtract = (a, b) => {
    return a - b;
};

// String matcher method
// - toMatch() : check that a string matches a regular expression
const toSayHello = () => {
    return "Hello";
};

// Array matcher method
// - toHaveLength() : check that an object has a '.length' property and it is set to a certain numeric value
const toCreateList = (i1, i2, i3, i4) => {
    return [i1, i2, i3, i4];
};

// General matcher method
// - toBeTruthy() : check that a variable is not undefined
const toReturnTrue = () => {
    return true;
}

// Exports
module.exports = {
    toSum,
    toSubtract,
    toSayHello,
    toCreateList,
    toReturnTrue
};