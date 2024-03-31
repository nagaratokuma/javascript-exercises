const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
  let sum = 0;
	for(let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  return sum;
};

const multiply = function(numArray) {
  let result = numArray[0];
  for(let i = 1; i < numArray.length; i++) {
    result *= numArray[i];
  }
  return result;
};

const power = function(num, exponent) {
	let result = num;
  for(let i = 1; i < exponent; i++) {
    result *= num
  }
  return result;
};

const factorial = function(num) {
	let result = 1;
  for(let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
};

sum([])
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
