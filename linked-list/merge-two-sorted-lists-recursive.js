// 2023-04-14
// https://leetcode.com/problems/merge-two-sorted-lists/submissions/933757351/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// Recursive
var mergeTwoLists = function(list1, list2) {
    // Base case
    if (!list1) {
        return list2;
    } else if (!list2) {
        return list1;
    }

    let head;
    if (list1.val <= list2.val) {
        head = list1;
        head.next = mergeTwoLists(list1.next, list2);
    } else {
        head = list2;
        head.next = mergeTwoLists(list1, list2.next);
    }
    return head;
}

