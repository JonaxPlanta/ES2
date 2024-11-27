const toDivide = require('./toDivide');

test("[DIVISION]: 6 ÷ 2 must be 3.", () => {
    expect(toDivide(6, 2)).toB
    e(3);
});

test("[DIVISÃO]: 10 ÷ 0 must be 0", () => {
    expect(toDivide(10, 0)).toBe(0);
});