// topics = ["数组", "回溯算法"]

// 回溯法搜索所有可行解
function subsets(nums: number[]): number[][] {
  const n = nums.length;
  const res: number[][] = [];
  const path: number[] = [];

  const backtrack = (idx = 0): void => {
    res.push([...path]);
    for (let i = idx; i < n; i += 1) {
      path.push(nums[i]);
      backtrack(i + 1);
      path.pop();
    }
  };

  backtrack();

  return res;
}
