from typing import List, Dict


class Solution:
    def fairCandySwap(self, A: List[int], B: List[int]) -> List[int]:
        t1 = sum(A)
        t2 = sum(B)
        avg = (t1 + t2) // 2

        d: Dict[int, int] = {}
        for ele in A:
            another = ele + avg - t1
            d.setdefault(another, ele)

        for ele in B:
            if ele in d:
                return [d[ele], ele]
