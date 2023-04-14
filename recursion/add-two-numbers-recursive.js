// 2023-04-14
// https://leetcode.com/problems/add-two-numbers/submissions/933784994/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    return addHelper(l1, l2, 0);
};

function addHelper(l1, l2, carry) {
    if (!l1 && !l2 && !carry) {
        return null;
    }
    let lhs, rhs, result;
    lhs = l1 ? l1.val : 0;
    rhs = l2 ? l2.val : 0;
    result = lhs + rhs + carry;
    if (Math.floor(result / 10) > 0) {
        carry = 1;
        result = result % 10;
    } else {
        carry = 0;
    }
    const head = new ListNode(result);
    head.next = addHelper(
        l1 ? l1.next : null,
        l2 ? l2.next : null,
        carry
    );
    return head;
}

