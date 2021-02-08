# topics = ["树", "深度优先搜索"]

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

from typing import List


class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> TreeNode:
        if not len(nums):
            return None
        mid = len(nums) // 2
        root = TreeNode(nums[mid])
        root.left = self.sortedArrayToBST(nums[0:mid])
        root.right = self.sortedArrayToBST(nums[mid + 1 :])
        return root
