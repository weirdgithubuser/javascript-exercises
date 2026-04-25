const fibonacci = function(number) {
    // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
    let num = Number(number)
    if(num === 0) return 0;
    if(num < 0) return 'OOPS';
    if (num === 1 || num === 2) return 1;
    
    num = Number(number) -1;
    let firstNumber = 0;
    let secondNumber = 1;
    let sum;
    for (let i = 0; i < num; i++){
        sum = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = sum;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
