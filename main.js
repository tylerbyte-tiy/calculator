const calc = (function() {
  var input = [];
  var inputString = "";

  const add = function(a, b) {
    return a + b;
  };

  const subtract = function(a, b) {
    return a - b;
  };

  const multiply = function(a, b) {
    return a * b;
  };

  const divide = function(a, b) {
    return a / b;
  };

  const modulus = function(a, b) {
    return a % b;
  };

  const invert = function(a, b) {
    return a * -1;
  };
})
