// 2023-05-16
// https://leetcode.com/problems/intersection-of-two-arrays-ii/submissions/951707451/?envType=study-plan&id=data-structure-i
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // Map solution
    const map = new Map();
    nums1.forEach(n => {
        const count = map.get(n);
        if (count) {
            map.set(n, count + 1);
        } else {
            map.set(n, 1);
        }
    });
    const result = [];
    nums2.forEach(n => {
        const count = map.get(n);
        if (count) {
            result.push(n);
            map.set(n, count - 1);
        }
    });
    return result;
};
