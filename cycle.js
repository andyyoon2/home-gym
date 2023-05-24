// 2023-05-24
// https://leetcode.com/problems/linked-list-cycle/submissions/956741724/?envType=study-plan&id=data-structure-i
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
    if (!head) {
        return false;
    }
    let slow = head, fast = head;
    while (slow && fast) {
        slow = slow.next;
        fast = fast.next?.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
};
