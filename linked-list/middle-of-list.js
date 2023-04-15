// 2023-04-15
// https://leetcode.com/problems/middle-of-the-linked-list/submissions/934289675/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let slow = head, fast = head;
  while (slow && fast) {
    if (!fast.next) {
      break;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

