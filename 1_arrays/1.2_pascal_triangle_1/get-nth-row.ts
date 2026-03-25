/**
 * Get nth row of pascal's triangle
 */
(() => {
  function factorial(n: number, r: number) {
    let result = 1;
    for (let i = 0; i < r; i++) {
      result *= n - i;
      result /= i + 1;
    }

    return result;
  }

  function getNthRow(n: number) {
    const rowArr = [1];

    for (let i = 1; i < n; i++) {
      rowArr.push(factorial(n - 1, i));
    }

    return rowArr;
  }

  function getNthRowBetter(n: number) {
    const rowArr = [1];

    for (let i = 1; i < n; i++) {
      rowArr.push((rowArr[i - 1] * (n - i)) / i);
    }

    return rowArr;
  }

  const n = 7;
  const nthRow = getNthRow(n);
  console.log(nthRow);
  const nthRowBetter = getNthRowBetter(n);
  console.log(nthRowBetter);
})();
