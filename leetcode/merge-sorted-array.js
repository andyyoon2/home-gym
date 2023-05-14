// 2023-05-14
// https://leetcode.com/problems/merge-sorted-array/submissions/950456931/?envType=study-plan&id=data-structure-i
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m + n - 1;
    while (m > 0 && n > 0) {
        if (nums2[n-1] > nums1[m-1]) {
            nums1[i] = nums2[n-1];
            n--;
        } else {
            nums1[i] = nums1[m-1];
            m--;
        }
        i--;
    }
    while (m <= 0 && n > 0) {
        nums1[i] = nums2[n-1];
        n--;
        i--;
    }
};
