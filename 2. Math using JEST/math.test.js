const mathOperations = require('./math.js');
const operation = require('./math.js');

test("[SUM]: 1 + 2 must be equal to 3. \n    [SUB]: 1 - 2 must be equal to -1. \n    [MUL]: 1 * 2 must be equal to 2. \n    [DIV]: 1 / 2 must be equal to 0.5.", () => {
    expect(mathOperations(1, 2)).toEqual( [ 3, -1, 2, 0.5 ] );
});

// To test, use in terminal:
// "npm run test"