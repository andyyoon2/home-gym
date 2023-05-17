// 2023-05-17
// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/submissions/952221107/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    // Find middle
    let slow = head, fast = head;
    while (slow && fast) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // Reverse 1st half
    fast = head;
    let next = fast.next, prev = null;
    while (fast !== slow) {
        fast.next = prev;
        prev = fast;
        fast = next;
        next = next.next;
    }
    // Find max sum
    let max = 0;
    while (slow) {
        const sum = slow.val + prev.val;
        if (sum > max) {
            max = sum;
        }
        slow = slow.next;
        prev = prev.next;
    }
    return max;
};
