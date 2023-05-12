// 2023-05-12
// https://leetcode.com/problems/plus-one/submissions/949062781/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
            carry = 1;
        } else {
            digits[i]++;
            break;
        }
    }
    // Carry went over the 1st digit
    if (digits[0] === 0) {
        digits.unshift(1);
    }
    return digits;
};
