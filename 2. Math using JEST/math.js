const mathOperations = (a, b) => {
    let result = new Array(4)
    
    result[0] = a + b;
    result[1] = a - b;
    result[2] = a * b;
    result[3] = a / b;

    return result;
}

module.exports = mathOperations;