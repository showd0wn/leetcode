// topics = ["数组", "双指针"]

function removeDuplicates(nums: number[]): number {
  if (nums.length == 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j += 1) {
    if (nums[j] !== nums[i]) {
      i += 1;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}
