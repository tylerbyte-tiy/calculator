var arr = [];

function addition (num1, num2) {
  let sum = num1 + num2;
  console.log(sum);
  return sum;
}
 console.assert(addition(3,7) === 10)

function subtraction (num1, num2) {
  let difference = num1 - num2;
  console.log(difference);
  return difference;
}
 console.assert(subtraction(3,7) === -4)

function multiplication (num1, num2) {
  let product = num1 * num2;
  console.log(product);
  return product;
}
// console.assert(multiplication(3,7) === 21)

function division (num1, num2) {
  let quotient = num1 / num2;
  console.log(quotient);
  return quotient;
}
// console.assert(division(12,4) === 3)

function modulus (num1, num2) {
  let remainder = num1 % num2;
  console.log(remainder);
  return remainder;
}
// console.assert(modulus(10,3) === 1)

const equalButton = function() {
  input = inputString.split(" ");
  console.log(input);
  let a = parseFloat(input[0]);
  let b = parseFloat(input[2]);

  let operator
  if (input[1] == "+") {
    operator = addition;
  }
  else if (input[1] == "-") {
    operator = subtraction;
  }
  else if (input[1] == "*") {
    operator = multiplication;
  }
  else if (input[1] == "/") {
    operator = division;
  }
  else if (input[1] == "%") {
    operator = modulus;
  }

  let result = calculate(a, b, operator);
  document.querySelector(".display").innerHTML = result;
  inputString = result;
  console.log(result);
};

// const calculate = function (a, b, cb) {
//   return cb(a, b);
//   console.log(cb(a, b));
// }
