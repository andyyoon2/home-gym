// 2023-05-07
// https://leetcode.com/problems/base-7/submissions/946693666/
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if (num === 0) {
        return '0';
    }
    // Push each digit into arr, then reverse and join into string
    const digits = [];
    let isNegative = false;
    if (num < 0) {
        isNegative = true;
        num *= -1;
    }
    while (num > 0) {
        digits.push(num % 7);
        num = Math.floor(num/7);
    }
    if (isNegative) {
        digits.push('-');
    }
    return digits.reverse().join('');
};
