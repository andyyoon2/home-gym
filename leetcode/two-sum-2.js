// 2023-05-14
// https://leetcode.com/problems/two-sum/submissions/950278170/?envType=study-plan&id=data-structure-i
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Map solution
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const match = map.get(target - nums[i]);
        if (match !== undefined) {
            return [i, match];
        } else {
            map.set(nums[i], i);
        }
    }
    // Invalid solution, should never reach here
    return [];
};
