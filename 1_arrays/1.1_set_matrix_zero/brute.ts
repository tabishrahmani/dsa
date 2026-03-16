(function () {
  /**
 Do not return anything, modify matrix in-place instead.
 */
  function setZeroes(matrix: (number | null)[][]): void {
    const m = matrix.length;
    const n = matrix[0].length;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] === 0) {
          for (let row = 0; row < m; row++) {
            if (matrix[row][j] !== 0) {
              matrix[row][j] = null;
            }
          }
          for (let col = 0; col < n; col++) {
            if (matrix[i][col] !== 0) {
              matrix[i][col] = null;
            }
          }
        }
      }
    }

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] === null) {
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
