# topics = ["数组"]

from typing import List


class Solution:
    def isMonotonic(self, A: List[int]) -> bool:
        """
        Iterate
        time O(n), space O(1), n 为数组长度
        """
        n = len(A)
        diff = A[-1] - A[0]

        for i in range(1, n):
            if diff == 0 and A[i] != A[i - 1]:
                return False
            if diff * (A[i] - A[i - 1]) < 0:
                return False

        return True
