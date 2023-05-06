// 2023-05-06
// https://leetcode.com/problems/two-sum/submissions/945713019/
// Sort and Two pointer method
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Find matches in sorted array
    const copy = [...nums].sort((a,b) => a < b ? -1 : 1);
    let l = 0, r = copy.length - 1, sum = 0;
    while (l < r) {
        sum = copy[l] + copy[r];
        if (sum === target) {
            break;
        } else if (sum < target) {
            l++;
        } else {
            r--;
        }
    }
    // Find original indices
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === copy[l] || nums[i] === copy[r]) {
            result.push(i);
        }
        if (result.length === 2) {
            return result;
        }
    }
    // Invalid solution, should never reach here
    return [];
};
