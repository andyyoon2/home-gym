// 2023-04-15
// https://leetcode.com/problems/reorder-list/submissions/934382257/
// https://medium.com/javarevisited/4-incredibly-useful-linked-list-tips-for-interview-79d80a29f8fc
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head, fast = head;
    // Find the middle of the list
    while (slow && fast) {
        if (!fast.next) {
            break;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    // Reverse the 2nd half
    slow = reverse(slow); // slow is now at the head of the reversed list
    fast = head;
    let fastNext, slowNext;
    // Weave the 2 lists
    while (slow && fast) {
        if (!slow.next) {
            break;
        }
        fastNext = fast.next;
        fast.next = slow;
        fast = fastNext;
        slowNext = slow.next;
        slow.next = fast;
        slow = slowNext;
    }
    return head;
};

function reverse(head) {
    let next = head, prev = null;
    while (head) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}

