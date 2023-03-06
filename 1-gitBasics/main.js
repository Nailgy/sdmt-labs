const readlineSync = require("readline-sync");

const showRoots = (arrOfRoots) => {
  const numOfRoots = arrOfRoots.length;
  let answer = `There are ${numOfRoots} roots\n`;
  for (i = 0; i < numOfRoots; i++) {
    answer += `x${i + 1} = ${arrOfRoots[i]}\n`;
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
    console.log("Error. a must not be equal to 0");
    inputValue = consoleRead(key);
  }
  return inputValue;
};

const runInteractiveMode = () => {
  const keys = ["a = ", "b = ", "c = "];
  const inputValues = keys.map((el) => consoleRead(el));
  const roots = solveQuadEquation(...inputValues);
  showRoots(roots);
};

runInteractiveMode();
