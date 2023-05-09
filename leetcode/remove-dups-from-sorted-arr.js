// 2023-05-09
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/947319246/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let l = 0, r = 1;
    while (l < nums.length && r < nums.length) {
        while (nums[l] === nums[r]) {
            r++;
        }
        if (r >= nums.length) {
            break;
        }
        l++;
        if (l < r) {
            nums[l] = nums[r];
        }
        r++;
    }
    return l+1;
};
