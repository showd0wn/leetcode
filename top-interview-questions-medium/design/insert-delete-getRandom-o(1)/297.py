# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Codec:

    def serialize(self, root):
        """Encodes a tree to a single string.

        :type root: TreeNode
        :rtype: str
        """
        if not root:
            return None

        return (root.val,
                self.serialize(root.left) if root.left else None,
                self.serialize(root.right) if root.right else None
               )

    def deserialize(self, data):
        """Decodes your encoded data to tree.

        :type data: str
        :rtype: TreeNode
        """
        if data is None:
            return None

        v = TreeNode(data[0])
        if data[1]:
            v.left = self.deserialize(data[1])
        if data[2]:
            v.right = self.deserialize(data[2])

        return v


# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.deserialize(codec.serialize(root))
