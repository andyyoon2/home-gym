// 2023-05-10
// https://leetcode.com/problems/search-insert-position/submissions/948103087/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0,
        end = nums.length - 1,
        mid;
    while (start < end) {
        mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return nums[start] >= target ? start : start+1;
};
