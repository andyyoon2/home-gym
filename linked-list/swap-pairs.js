// 2023-04-14
// https://leetcode.com/problems/swap-nodes-in-pairs/submissions/933765961/
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
    const remainder = swapPairs(head.next.next);
    const swapped = head.next;
    swapped.next = head;
    head.next = remainder;
    return swapped;
};

/*

Base case
null: return 
null -> null: return
1 -> null: return

Swap base case
1 -> 2 -> null
2 -> 1 -> null

A -> B -> (rest of list)
B -> A -> (rest of list)

*/

