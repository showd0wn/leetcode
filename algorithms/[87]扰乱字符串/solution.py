# topics = ["递归"]

from functools import lru_cache


class Solution:
    def isScramble(self, s1: str, s2: str) -> bool:
        """
        递归 超时
        """
        if s1 == s2:
            return True
        if sorted(s1) != sorted(s2):
            return False

        n = len(s1)
        for i in range(1, n):
            if self.isScramble(s1[:i], s2[:i]) and self.isScramble(s1[i:], s2[i:]):
                return True
            if self.isScramble(s1[:i], s2[-i:]) and self.isScramble(s1[i:], s2[:-i]):
                return True
        return False

    @lru_cache(None)
    def isScramble2(self, s1: str, s2: str) -> bool:
        """
        记忆化递归，参考 https://leetcode-cn.com/problems/scramble-string/solution/fu-xue-ming-zhu-ji-yi-hua-di-gui-by-fuxu-r98z/
        """
        if s1 == s2:
            return True
        if sorted(s1) != sorted(s2):
            return False

        n = len(s1)
        for i in range(1, n):
            if self.isScramble(s1[:i], s2[:i]) and self.isScramble(s1[i:], s2[i:]):
                return True
            if self.isScramble(s1[:i], s2[-i:]) and self.isScramble(s1[i:], s2[:-i]):
                return True
        return False
