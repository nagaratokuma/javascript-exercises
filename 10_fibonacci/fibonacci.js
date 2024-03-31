const fibonacci = function(num) {
    num = Number(num);
    if (num < 0) {
        return "OOPS"
    }
    if (num === 0) return 0
    let fibonacciArray = [0, 1, 1];

    for (let i = 3; i <= num; i++) {
        result = fibonacciArray[i-2] + fibonacciArray[i-1]
        fibonacciArray.push(result);
    }
    return fibonacciArray[num];
};

// Do not edit below this line
module.exports = fibonacci;
