(() => {
  function getNthRow(n: number) {
    const row = [1];

    for (let i = 1; i < n; i++) {
      row.push((row[i - 1] * (n - i)) / i);
    }
    return row;
  }
  function generate(numRows: number): number[][] {
    const triangle = [];
    for (let i = 1; i <= numRows; i++) {
      triangle.push(getNthRow(i));
    }
    return triangle;
  }

  const n = 7;
  const triangle = generate(n);
  console.log(triangle);
})();
