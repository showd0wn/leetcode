# topics = ["数组", "二分查找"]

import bisect
from typing import List


class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums)

        while left < right:
            mid = (left + right) // 2
            if nums[mid] < target:
                left = mid + 1
            else:
                right = mid

        return left

    def searchInsert2(self, nums: List[int], target: int) -> int:
        return bisect.bisect_left(nums, target)
