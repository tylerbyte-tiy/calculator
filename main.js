function addition (num1a, num2a) {
  let sum = num1a + num2a;
  console.log(sum);
  return sum;
}
console.assert(addition(3,7) === 10)

function subtraction (num1s, num2s) {
  let difference = num1s - num2s;
  console.log(difference);
  return difference;
}
console.assert(subtraction(3,7) === -4)

function multiplication (num1t, num2t) {
  let product = num1t * num2t;
  console.log(product);
  return product;
}
console.assert(multiplication(3,7) === 21)

function division (num1d, num2d) {
  let quotient = num1d / num2d;
  console.log(quotient);
  return quotient;
}
console.assert(division(12,4) === 3)

function modulo (num1m, num2m) {
  let remainder = num1m % num2m;
  console.log(remainder);
  return remainder;
}
console.assert(modulo(10,3) === 1)

// document.querySelector('#zero').innerHTML = 0;

var buttonOne = document.getElementById('one')

buttonOne.addEventListener('click', function (){
  console.log(1);
});

var buttonTwo = document.getElementById('two')

buttonTwo.addEventListener('click', function (){
  console.log(2);
});

var buttonThree = document.getElementById('three')

buttonThree.addEventListener('click', function (){
  console.log(3);
});

var buttonFour = document.getElementById('four')

buttonFour.addEventListener('click', function (){
  console.log(4);
});

var buttonFive = document.getElementById('five')

buttonFive.addEventListener('click', function (){
  console.log(5);
});

var buttonSix = document.getElementById('six')

buttonSix.addEventListener('click', function (){
  console.log(6);
});

var buttonSeven = document.getElementById('seven')

buttonSeven.addEventListener('click', function (){
  console.log(7);
});

var buttonEight = document.getElementById('eight')

buttonEight.addEventListener('click', function (){
  console.log(8);
});

var buttonNine = document.getElementById('nine')

buttonNine.addEventListener('click', function (){
  console.log(9);
});

var buttonZero = document.getElementById('zero')

buttonZero.addEventListener('click', function (){
  console.log(0);
});

// var buttonPlus = document.getElementById('plus')
//
// buttonPlus.addEventListener('click', function (){
//   console.log(???);
// });
