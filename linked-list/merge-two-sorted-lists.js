// 2023-04-14
// https://leetcode.com/problems/merge-two-sorted-lists/submissions/933753657/
// https://leetcode.com/problems/merge-two-sorted-lists/solutions/1826666/c-easy-to-understand-2-approaches-recursive-iterative/
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
var mergeTwoLists = function(list1, list2) {
    // Handle empty lists
    if (!list1) {
        return list2;
    } else if (!list2) {
        return list1;
    }
    // Set the head of the new list
    let head, curr;
    if (list1.val <= list2.val) {
        head = list1;
        list1 = list1.next;
    } else {
        head = list2;
        list2 = list2.next;
    }
    curr = head;
    // Merge lists
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }
    // Add any remaining items
    if (!list1) {
        curr.next = list2;
    } else {
        curr.next = list1;
    }
    return head;
};

