// 2023-04-19
// https://leetcode.com/problems/powx-n/submissions/936511851/
// https://leetcode.com/problems/powx-n/solutions/19563/iterative-log-n-solution-with-clear-explanation/
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// var myPow = function(x, n) {
//     if (n === 0) {
//         return 1;
//     } else if (n > 0) {
//         return x * myPow(x, n - 1);
//     } else {
//         return (1 / x) * myPow((1/x), (n * -1) - 1);
//     }
// };

// var myPow = function(x, n) {
//     if (n === 0) {
//         return 1;
//     } else if (n < 0) {
//         x = 1 / x;
//         n *= -1;
//     }
    
//     let result = x;
//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }
//     return result;
// };

var myPow = function(x, n) {
    if (n === 0) {
        return 1;
    }
    const sqrt = myPow(x, Math.floor(n/2));
    const result = sqrt * sqrt * (x * n%2);
    return n > 0 ? result : 1 / result;
};
