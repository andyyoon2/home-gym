// 2023-04-20
// https://leetcode.com/problems/palindrome-number/submissions/937087373/
/**
 * @param {number} x
 * @return {boolean}
 */
// Without string conversion
function isPalindrome(x) {
    if (x < 0) {
        return false;
    }
    let reversed = 0, y = x;
    // Extract out the 1's place of x, insert into reversed
    while (y > 0) {
        reversed += y % 10;
        if (y < 10) {
            break;
        }
        reversed *= 10;
        y = Math.floor(y/10);
    }
    return reversed === x;
}
