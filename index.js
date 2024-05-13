// index.js
const argv = require("yargs").argv;
const { sum, minus, mult, div } = require("./function");

// TODO: рефакторити
function invokeAction({ action, num1, num2 }) {
  switch (action) {
    case "sum":
      console.log("sum =", sum(num1, num2));
      break;

    case "minus":
      console.log("result =", minus(num1, num2));
      break;

    case "mult":
      console.log("result =", mult(num1, num2));
      break;

    case "div":
      console.log("result =", div(num1, num2));
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction(argv);

const confused = "no";
const myKey = confused;

const obj = {
  [myKey]: false,
};

console.log(obj);
