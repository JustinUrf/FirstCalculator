
//business logic
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}


//user interface logic
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert("Your numbers added to " + add(number1, number2) +
 ". Your numbers subtacted to " + subtract(number1, number2) + 
 ". Your numbers multiplied to " + multiply(number1, number2) +
 ". Your numbers divided to " + divide(number1, number2));
