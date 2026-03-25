(function () {
  function generate(numRows: number): number[][] {
    const triangle: number[][] = [];
    for (let i = 0; i < numRows; i++) {
      if (i === 0) {
        triangle.push([1]);
        continue;
      }
      const newArr = [];
      for (let j = 0; j <= i; j++) {
        newArr.push(
          (triangle[i - 1]?.[j - 1] ?? 0) + (triangle[i - 1][j] ?? 0),
        );
      }
      triangle.push(newArr);
    }

    return triangle;
  }

  const pascal = generate(5);
  console.log(pascal);
})();
