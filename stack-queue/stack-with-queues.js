// 2023-04-19
// https://leetcode.com/problems/implement-stack-using-queues/submissions/936458811/
var MyStack = function() {
    // Which queue we'll do a 'fast pop' from because it only has 1 elem
    // Use boolean for easy toggles
    this.isQ1LastEl = true;
    this.q1 = [];
    this.q2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    let fullQueue, lastElQueue;
    if (this.isQ1LastEl) {
        fullQueue = this.q2;
        lastElQueue = this.q1;
    } else {
        fullQueue = this.q1;
        lastElQueue = this.q2;
    }

    if (lastElQueue.length > 0) {
        // Move it over - lastElQueue should only have 1 element
        fullQueue.push(lastElQueue.shift());
    }
    // Push it
    lastElQueue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let fullQueue, lastElQueue;
    if (this.isQ1LastEl) {
        fullQueue = this.q2;
        lastElQueue = this.q1;
    } else {
        fullQueue = this.q1;
        lastElQueue = this.q2;
    }
    if (lastElQueue.length === 0) {
        if (fullQueue.length === 1) {
            return fullQueue.shift();
        }
        // No elements left, need to transfer the other queue to get the last item
        this.transferQueue(fullQueue, lastElQueue);
        lastElQueue = fullQueue; // Because it got swapped
    }
    // Return the last item
    return lastElQueue.shift();

};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    if (this.isQ1LastEl) {
        if (this.q1.length > 0) {
            return this.q1[0];
        } else {
            this.transferQueue(this.q2, this.q1);
            return this.q2[0];
        }
    } else {
        if (this.q2.length > 0) {
            return this.q2[0];
        } else {
            this.transferQueue(this.q1, this.q2);
            return this.q1[0];
        }
    }
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length === 0 && this.q2.length === 0;
};

// Moves over all elements except 1, which will be popped next
// Then toggles the "next el queue" pointer
MyStack.prototype.transferQueue = function(src, dest) {
    while (src.length > 1) {
        dest.push(src.shift());
    }
    this.isQ1LastEl = !this.isQ1LastEl;
}

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
