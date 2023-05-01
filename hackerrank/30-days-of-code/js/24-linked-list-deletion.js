// 2023-05-01
// https://www.hackerrank.com/challenges/30-linked-list-deletion/problem?isFullScreen=true
    this.removeDuplicates=function(head){
        if (!head || !head.next) {
            return head;
        }
        let node = head, next;
        while (node) {
            next = node.next;
            while (next && next.data === node.data) {
                next = next.next;
            }
            node.next = next;
            node = node.next;
        }
        return head;
    }
