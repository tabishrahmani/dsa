(function () {
  /**
 Do not return anything, modify matrix in-place instead.
 */
  function setZeroes(matrix: number[][]): void {
    const m = matrix.length;
    const n = matrix[0].length;
    const row = new Array(m).fill(0);
    const col = new Array(n).fill(0);

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] === 0) {
          row[i] = 1;
          col[j] = 1;
        }
      }
    }

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (row[i] || col[j]) {
          matrix[i][j] = 0;
        }
      }
    }
  }

  const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  setZeroes(matrix);
  console.log(matrix);
})();
