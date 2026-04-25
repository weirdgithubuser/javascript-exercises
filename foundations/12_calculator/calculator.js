const add = function(num1, num2) {
	return (num1 + num2); 
};

const subtract = function(num1, num2) {
  return (num1 - num2);
};

const sum = function(numbers) {
  return Array.from(numbers).reduce((sum, item) => sum + item, 0);
};

const multiply = function(numbers) {
  return Array.from(numbers).reduce((product, item) => product * item,1);
};

const power = function(base, exponent) {
	return base**exponent;
};

const factorial = function(num) {
  if (num === 0){
    return 1;
  }
  let product = 1;
  for (let i = num; i > 0; i--){
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
