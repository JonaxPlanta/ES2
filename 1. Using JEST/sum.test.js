const sum = require('./sum.js');

test("[SUM]: 1 + 2 must be equal to 3.", () => {
    expect(sum(1, 2)).toBe(3);
});

// To test, use in terminal:
// "npm run test"
// "npx jest"