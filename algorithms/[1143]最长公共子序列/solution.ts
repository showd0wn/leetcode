// topics = ["字符串", "动态规划"]

function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length;
  const n = text2.length;
  const dp = new Array(m + 1).fill(0).map(() => new Array<number>(n + 1).fill(0));

  for (let i = 1; i <= m; i += 1) {
    const c1 = text1[i - 1];
    for (let j = 1; j <= n; j += 1) {
      const c2 = text2[j - 1];
      if (c1 === c2) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}
