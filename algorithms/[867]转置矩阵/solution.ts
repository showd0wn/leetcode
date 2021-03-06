// topics = ["数组"]

/**
 * Iterate
 * time O(mn), space O(1), m 和 n 分别为矩阵的行数和列数
 */
function transpose(matrix: number[][]): number[][] {
  const m = matrix.length;
  const n = matrix[0].length;

  const res = Array.from({ length: n }, () => new Array<number>(m));

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      res[j][i] = matrix[i][j];
    }
  }

  return res;
}
