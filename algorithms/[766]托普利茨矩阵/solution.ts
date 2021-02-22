// topics = ["数组"]

function isToeplitzMatrix(matrix: number[][]): boolean {
  const n = matrix.length;
  const m = matrix[0].length;

  for (let i = 0; i < n - 1; i += 1) {
    for (let j = 0; j < m - 1; j += 1) {
      if (matrix[i][j] != matrix[i + 1][j + 1]) {
        return false;
      }
    }
  }

  return true;
}
