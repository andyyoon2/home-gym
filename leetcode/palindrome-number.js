// 2023-04-20
// https://leetcode.com/problems/palindrome-number/submissions/937083319/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var s = x.toString();
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[s.length - i - 1]) {
            return false;
        }
    }
    return true;
};
