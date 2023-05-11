// 2023-05-11
// https://leetcode.com/problems/uncrossed-lines/solutions/282842/java-c-python-dp-the-longest-common-subsequence/
// https://leetcode.com/problems/uncrossed-lines/editorial/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
    const memo = Array(nums1.length + 1);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = Array(nums2.length + 1);
    }
    return findMax(nums1, nums2, nums1.length, nums2.length, memo);
};

function findMax(n1, n2, i, j, memo) {
    if (i <= 0 || j <= 0) {
        return 0;
    }
    if (memo[i][j] !== undefined) {
        return memo[i][j];
    }
    if (n1[i-1] === n2[j-1]) {
        memo[i][j] = 1 + findMax(n1, n2, i-1, j-1, memo);
    } else {
        memo[i][j] = Math.max(
            findMax(n1, n2, i, j-1, memo), 
            findMax(n1, n2, i-1, j, memo)
        );
    }
    return memo[i][j];
}
