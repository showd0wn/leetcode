// topics = ["哈希表"]

/**
 * Hash Table
 * time O(n + m), space O(n), n 和 m 分别为 A 和 B 的长度
 */
function fairCandySwap(A: number[], B: number[]): number[] {
  const t1 = A.reduce((a, b) => a + b, 0);
  const t2 = B.reduce((a, b) => a + b, 0);
  const avg = Math.floor((t1 + t2) / 2);

  // 不考虑索引的情况下优先使用 Set
  const setA = new Set(A);
  for (const val of B) {
    const another = val + avg - t2;
    if (setA.has(another)) {
      return [another, val];
    }
  }

  return [];
}
