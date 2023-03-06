const showRoots = (arrOfRoots) => {
  const numOfRoots = arrOfRoots.length;
  const verb = numOfRoots >= 2 ? "are" : "is";
  let answer = `There ${verb} ${numOfRoots} roots\n`;
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
    const x1 = ((-b - sqrtD) / (2 * a)).toFixed(1);
    const x2 = ((-b + sqrtD) / (2 * a)).toFixed(1);
    roots = [x1, x2];
  }
  if (D === 0) {
    const x = (-b / (2 * a)).toFixed(1);
    roots = [x];
  }
  return roots;
};
