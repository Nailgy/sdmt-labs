"use strict";

const showRoots = (rootsArr) => {
  const numOfRoots = rootsArr.length;
  let answer = `There are ${numOfRoots} roots\n`;
  for (let i = 0; i < numOfRoots; i++) {
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

module.exports = { showRoots, solveQuadEquation };
