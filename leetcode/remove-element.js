// 2023-05-06
// https://leetcode.com/problems/remove-element/submissions/945689066/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        if (nums[l] === val) {
            // Find a swap target
            while (nums[r] === val) {
                r--;
                if (r < 0 || r < l) {
                    return l;
                }
            }
            swap(nums, l, r);
        }
        l++;
    }
    return l;
};

function swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
