const readlineSync = require("readline-sync");
const { readFileSync, existsSync } = require("fs");

const showRoots = (rootsArr) => {
  const numOfRoots = rootsArr.length;
  let answer = `There are ${numOfRoots} roots\n`;
  for (i = 0; i < numOfRoots; i++) {
    answer += `x${i + 1} = ${rootsArr[i]}\n`;
  }
  console.log(answer);
};

const solveQuadEquation = (a, b, c) => {
  let roots = [];
  const D = b * b - 4 * a * c;
  const sqrtD = Math.sqrt(D);
  console.log(`Equation is: (${a})x^2 + (${b})x + (${c}) = 0`);

  if (D > 0) {
    const x1 = ((-b - sqrtD) / (2 * a)).toFixed(3);
    const x2 = ((-b + sqrtD) / (2 * a)).toFixed(3);
    roots = [x1, x2];
  }
  if (D === 0) {
    const x = (-b / (2 * a)).toFixed(3);
    roots = [x];
  }
  return roots;
};

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
    console.log("Error. a cannot be");
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

if (process.argv.length === 2) {
  runInteractiveMode();
} else if (process.argv.length === 3) {
  runNoninteractiveMode();
}
