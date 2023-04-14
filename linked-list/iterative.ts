// 2023-04-12
// https://leetcode.com/problems/reverse-linked-list/
function reverseList(head: ListNode | null): ListNode | null {
    /*
    BCR: O(n)
    Iterate through all, point their next's back
    Brute force: Gather into array(vector), then iterate backwards through the vector
    
    0,1,2,3,4
    
    lagging, curr, leading
    ^ head -> 1  ->   2  -> ...
    
    we want it to look like:
    lagging, curr
    0      <- 1       2  -> ...
             lagging, curr, leading 
    0      <- 1       2  -> 3
    */
    let lagging = null, curr = head, leading = head;
    while (curr) {
        // Get next position
        leading = curr.next;
        // Reset next to point behind
        curr.next = lagging;
        // Advance all pointers to next iteration
        lagging = curr;
        curr = leading;
    }
    return lagging;
};

