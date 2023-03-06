"use strict";

const { solveQuadEquation, showRoots } = require("./solve.js");
const readlineSync = require("readline-sync");

const consoleRead = (key) => {
  let inputValue = readlineSync.question(key);

  while (isNaN(inputValue)) {
    console.log(
      `Error. Expected a valid real number, got ${inputValue} instead`
    );
    inputValue = readlineSync.question(key);
  }
  if (inputValue === "") {
    console.log("Error. Enter some value");
    inputValue = consoleRead(key);
  }
  if (key === "a = " && inputValue === "0") {
    console.log("Error. a cannot be 0");
    inputValue = consoleRead(key);
  }
  return inputValue;
};

const runInteractiveMode = () => {
  const keys = ["a = ", "b = ", "c = "];
  const inputValues = keys.map((el) => consoleRead(el));
  const roots = solveQuadEquation(...inputValues);
  return showRoots(roots);
};

module.exports = { runInteractiveMode };
