/**
 * Given row and column, find element at that place in pascal triangle
 */
(function () {
  function factorial(n: number, r: number) {
    let factorial: number = 1;

    for (let i = 0; i < r; i++) {
      factorial *= n - i;
      factorial /= i + 1;
    }

    return factorial;
  }
  function findElement(r: number, c: number) {
    return factorial(r - 1, c - 1);
  }

  const r = 5;
  const c = 3;
  const element = findElement(r, c);
  console.log(element);

  const numRows = 5;
  function pascal(rows: number) {
    const pascalTriangle = [];
    for (let row = 1; row <= rows; row++) {
      const pascalArr = [];
      for (let col = 1; col <= row; col++) {
        pascalArr.push(findElement(row, col));
      }
      pascalTriangle.push(pascalArr);
    }

    return pascalTriangle;
  }
  const triangle = pascal(numRows);
  console.log(triangle);
})();
