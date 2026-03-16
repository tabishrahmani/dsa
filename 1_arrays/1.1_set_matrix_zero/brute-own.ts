(function () {
  function setZeroes(matrix: number[][]): void {
    const zeros: number[][] = [];
    for (const row in matrix) {
      for (const col in matrix[row]) {
        if (!matrix[row][col]) zeros.push([+row, +col]);
      }
    }

    if (zeros.length) {
      for (const [row, col] of zeros) {
        for (let i = 0; i < matrix.length; i++) {
          matrix[i][col] = 0;
        }
        for (let i = 0; i < matrix[0].length; i++) {
          matrix[row][i] = 0;
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
})();
