// 2023-04-14
// https://leetcode.com/problems/reverse-linked-list/
function reverseList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }
    const nextHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return nextHead;
};

