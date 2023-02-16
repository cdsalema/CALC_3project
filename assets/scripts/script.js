import * as math from 'mathjs';

let result = document.getElementById("result");
let currentNumber = "";
let currentOperator = "";

function roundNumber(num) {
  return Math.round(num * 100
)/100;
}

function clear() {
currentNumber = "";
currentOperator = "";
result.value = "";
}

function backspace() {
currentNumber = currentNumber.slice(0, -1);
result.value = currentNumber;
}

function appendNumber(number) {
currentNumber += number;
result.value = currentNumber;
}

function setOperator(operator) {
if (currentOperator !== "") {
calculateResult();
}
currentOperator = operator;
currentNumber = "";
}

function calculateResult() {
if (currentOperator === "") {
return;
}
const expression = currentNumber + currentOperator + result.value;
const evaluated = math.evaluate(expression);
result.value = roundNumber(evaluated).toFixed(3);
currentNumber = result.value;
currentOperator = "";
}

function handleButtonPress(button) {
const buttonValue = button.target.value;

switch (buttonValue) {
case "clear":
clear();
break;
case "backspace":
backspace();
break;
case "+":
case "-":
case "*":
case "/":
setOperator(buttonValue);
break;
case "=":
calculateResult();
break;
default:
appendNumber(buttonValue);
}
}

const buttons = document.querySelectorAll("button");
for (const button of buttons) {
button.addEventListener("click", handleButtonPress);
}