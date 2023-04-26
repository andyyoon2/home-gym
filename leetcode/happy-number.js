// 2023-04-26
// https://leetcode.com/problems/happy-number/submissions/940296842/
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const seen = {};
    let sum = 0, s;
    while (true) {
        s = n.toString();
        for (let c of s) {
            sum += parseInt(c, 10) ** 2;
        }
        if (sum === 1) {
            return true;
        } else if (seen[sum]) {
            return false;
        } else {
            seen[sum] = true;
        }
        n = sum;
        sum = 0;
    }
};
