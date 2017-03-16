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
console.assert(multiplication(3,7) === 21)

function division (num1, num2) {
  let quotient = num1 / num2;
  console.log(quotient);
  return quotient;
}
console.assert(division(12,4) === 3)

function modulo (num1, num2) {
  let remainder = num1 % num2;
  console.log(remainder);
  return remainder;
}
console.assert(modulo(10,3) === 1)

var solution = function equals(num1, num2, cb) {
  let result = cb(num1, num2);

}
