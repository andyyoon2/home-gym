// 2023-06-20
// https://leetcode.com/problems/array-reduce-transformation/submissions/975629527/
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if (nums.length === 0) {
        return init;
    }
    let result = init;
    nums.forEach(n => {
        result = fn(result, n);
    });
    return result;
};
