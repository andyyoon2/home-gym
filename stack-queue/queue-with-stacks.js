// 2023-04-18
// https://leetcode.com/problems/implement-queue-using-stacks/submissions/936011913/
var MyQueue = function() {
    this.s1 = [];
    this.s2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.s2.length > 0) {
        return this.s2.pop();
    }
    while (this.s1.length > 1) {
        this.s2.push(this.s1.pop());
    }
    // Reached bottom of s1
    return this.s1.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.s2.length > 0) {
        return this.s2[this.s2.length - 1];
    }
    return this.s1[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s1.length === 0 && this.s2.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

