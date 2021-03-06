# topics = ["二分查找"]

from math import ceil
from functools import reduce
from typing import List


class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        """
        Binary Search
        time O(nlogw), space O(1), n 为香蕉堆的数量, w 为最大堆香蕉的数量
        """
        i, j = 1, max(piles)

        while i < j:
            mid: int = (i + j) // 2
            hour = reduce(lambda acc, cur: acc + ceil(cur / mid), piles, 0)
            if hour > h:
                i = mid + 1
            else:
                j = mid

        return i
