// 2023-05-16
// https://leetcode.com/problems/swap-nodes-in-pairs/submissions/951720076/
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
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }
    const next = head.next;
    head.next = swapPairs(next.next);
    next.next = head;
    return next;
};
