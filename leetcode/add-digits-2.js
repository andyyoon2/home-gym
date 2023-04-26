// 2023-04-26
// https://leetcode.com/problems/add-digits/submissions/940289876/
// https://en.wikipedia.org/wiki/Digital_root
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num === 0) {
        return 0;
    }
    return 1 + (num - 1) % 9;
};
