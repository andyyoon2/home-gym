// 2023-05-16
// https://leetcode.com/problems/intersection-of-two-arrays-ii/submissions/951708925/?envType=study-plan&id=data-structure-i
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // Sort and two pointer solution
    nums1.sort((a,b) => a < b ? -1 : 1);
    nums2.sort((a,b) => a < b ? -1 : 1);

    const result = [];
    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return result;
};
