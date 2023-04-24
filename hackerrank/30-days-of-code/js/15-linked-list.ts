// 2023-04-20
// https://www.hackerrank.com/challenges/30-linked-list/problem?isFullScreen=true
function main() {
    let head = null;
    for (let i = 1; i < inputLines.length; i++) {
        head = insert(head, parseInt(inputLines[i], 10));
    }
    printList(head);
}

function insert(head: ListNode, val: number) {
    if (!head) {
        return new ListNode(val);
    }
    let node = head;
    while (node.next) {
        node = node.next;
    }
    node.next = new ListNode(val);
    return head;
}

function printList(head: ListNode) {
    let node = head;
    while (node) {
        process.stdout.write(`${node.val} `);
        node = node.next;
    }
    process.stdout.write('\n');
}

class ListNode {
    val: number;
    next: ListNode | null = null;
    constructor(val: number) {
        this.val = val;
    }
}
