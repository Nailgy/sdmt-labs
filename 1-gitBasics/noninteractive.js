"use strict";

const { solveQuadEquation, showRoots } = require("./solve.js");
const { readFileSync, existsSync } = require("fs");

const runNoninteractiveMode = () => {
  const filePath = process.argv[2];
  if (!existsSync(filePath)) {
    console.log(`File ${filePath} does not exist`);
    process.exit(1);
  }

  const text = readFileSync(filePath, "utf8");
  const valuesArr = text.split(" ").map((el) => Number(el));
  const isAllNums = valuesArr.every((el) => !isNaN(el));
  if (valuesArr.length !== 3 || !isAllNums) {
    console.log("invalid file format");
    process.exit(1);
  }
  if (valuesArr[0] === 0) {
    console.log("Error. a cannot be 0");
    process.exit(1);
  }
  const roots = solveQuadEquation(...valuesArr);
  return showRoots(roots);
};

module.exports = { runNoninteractiveMode };
