const sum = require('./sum.js');

test("[SOMA]: 1 + 2 deve ser 3.", () => {
    expect(sum(1, 2)).toBe(3);
});

// To test, use in terminal:
// "npm run test"