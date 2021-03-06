// topics = ["哈希表"]

/**
 * Hash Table
 * time O(mn), space O(mn), m 和 n 分别为砖墙的高和平均宽
 */
function leastBricks(wall: number[][]): number {
  const m = wall.length;
  const cnt = new Map<number, number>();

  for (const w of wall) {
    let preSum = 0;
    for (let i = 0, n = w.length; i < n - 1; i += 1) {
      preSum += w[i];
      cnt.set(preSum, (cnt.get(preSum) ?? 0) + 1);
    }
  }

  if (cnt.size == 0) {
    return m;
  }

  return m - Math.max(...cnt.values());
}
