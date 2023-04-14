// 2023-04-14
// https://leetcode.com/problems/remove-nodes-from-linked-list/submissions/933820365/
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
var removeNodes = function(head) {
    if (!head || !head.next) {
        return head;
    }
    const remainder = removeNodes(head.next);
    if (head.val < remainder.val) {
        return remainder;
    } else {
        head.next = remainder;
        return head;
    }
};

