// 2023-05-24
// https://leetcode.com/problems/merge-two-sorted-lists/submissions/956744633/?envType=study-plan&id=data-structure-i
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
    if (!list1) {
        return list2;
    } else if (!list2) {
        return list1;
    }

    const dummy = new ListNode();
    let node = dummy;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            node.next = list1;
            list1 = list1.next;
        } else {
            node.next = list2;
            list2 = list2.next;
        }
        node = node.next;
    }
    // Add any remaining items
    if (list1) {
        node.next = list1;
    } else if (list2) {
        node.next = list2;
    }
    return dummy.next;
};
