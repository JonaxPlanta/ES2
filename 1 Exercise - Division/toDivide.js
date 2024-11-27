const toDivide = (a, b) => {
    let result = (a / b);
    
    switch (result) {
        case Infinity:
            return 0;
        default:
            return result;
    };
};

module.exports = toDivide;