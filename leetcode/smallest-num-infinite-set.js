// 2023-04-24
// https://leetcode.com/problems/smallest-number-in-infinite-set/submissions/939229017/
var SmallestInfiniteSet = function() {
    this.counter = 1;
    this.addedBack = [];
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    if (this.addedBack.length > 0) {
        return this.addedBack.shift();
    } else {
        return this.counter++;
    }
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if (num >= this.counter) {
        return;
    }
    // Insert into array in sorted order
    for (let i = 0; i < this.addedBack.length; i++) {
        if (this.addedBack[i] === num) {
            // Don't add since it already exists
            return;
        }
        if (this.addedBack[i] > num) {
            this.addedBack.splice(i, 0, num);
            return;
        }
    }
    // Reached end of arr
    this.addedBack.push(num);
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
