// 2023-04-17
// https://leetcode.com/problems/apply-transform-over-each-element-in-array/submissions/935373352/
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
};

