const calc = (function() {
  var input = [];
  var inputString = "";

  const add = function(a, b) {
    let sum = a + b;
    sum = Math.floor(sum*10000000000)/10000000000;
    return sum;
  };

  const subtract = function(a, b) {
    let difference = a - b;
    difference = Math.floor(difference*10000000000)/10000000000;
    return difference;
  };

  const multiply = function(a, b) {
    let product = a * b;
    product = Math.floor(product*10000000000)/10000000000;
    return product;
  };

  const divide = function(a, b) {
    let quotient = a / b;
    quotient = Math.floor(quotient*10000000000)/10000000000;
    return quotient;
  };

  const modulus = function(a, b) {
    let remainder = a % b;
    remainder = Math.floor(remainder*10000000000)/10000000000;
    return remainder;
  };

  const negative = function(a, b) {
    return a * -1;
  };

  const numToString = function(clicked_id) {
    inputString += clicked_id;
    console.log(inputString);
    document.querySelector(".display").innerHTML = inputString;
  };

  const operToString = function(clicked_id) {
    inputString += " " + clicked_id + " ";
    console.log(inputString);
    document.querySelector(".display").innerHTML = inputString;
  };

  const equalButton = function() {
    input = inputString.split(" ");
    console.log(input);
    let a = parseFloat(input[0]);
    let b = parseFloat(input[2]);

    let operator
    if (input[1] == "+") {
      operator = add;
    }
    else if (input[1] == "-") {
      operator = subtract;
    }
    else if (input[1] == "*") {
      operator = multiply;
    }
    else if (input[1] == "/") {
      operator = divide;
    }
    else if (input[1] == "%") {
      operator = modulus;
    }
    let result = calculate(a, b, operator);
    document.querySelector(".display").innerHTML = result;
    inputString = result;
    console.log(result);
  };

  const calculate = function(a, b, cb) {
    return cb(a, b);
    console.log(cb(a, b));
  };

  function addListenerForEquals() {
    const button = document.querySelector("#equalButton");
    button.addEventListener("click", function() {
      equalButton(button.value);
    });
  };

  function addListenerForNumbers() {
    const buttons = document.querySelectorAll(".number")
    for(let i =0; i < buttons.length; i++) {
      let button = buttons[i];
      button.addEventListener("click", function() {
        numToString(button.value);
      });
    };
  };

  function addListenerForOperators() {
    const buttons = document.querySelectorAll(".operator")
    for(let i =0; i < buttons.length; i++) {
      let button = buttons[i];
      button.addEventListener("click", function() {
        operToString(button.value);
      });
    };
  };

  function addListenerForUnaryOperators() {
    const buttons = document.querySelectorAll(".unaryOperator")
    for(let i = 0; i < buttons.length; i++) {
      let button = buttons[i];
      button.addEventListener("click", function() {
        let value = document.querySelector(".display").innerHTML;
        let currentNum = parseFloat(value);
        let negativeNum = negative(currentNum);
        document.querySelector(".display").innerHTML = negativeNum;
        inputString = negativeNum;
      });
    };
  };

  addListenerForEquals();
  addListenerForNumbers();
  addListenerForOperators();
  addListenerForUnaryOperators();

  return {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    modulus: modulus,
    negative: negative,
    numToString: numToString,
    operToString: operToString,
    equalButton: equalButton,
    calculate: calculate
  };

})();
window.onload = calc;
