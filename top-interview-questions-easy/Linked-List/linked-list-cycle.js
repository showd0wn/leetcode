/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head || !head.next) return false
  var fast = head.next
  var slow = head
  while (fast !== slow) {
    if (!fast || !fast.next) return false
    fast = fast.next.next
    slow = slow.next
  }
  return true
};
