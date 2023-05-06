// 2023-05-06
// https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/submissions/945709114/
// https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/solutions/709227/java-c-python-two-sum/
const mod = 1000000007n;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    nums.sort((a,b) => a < b ? -1 : 1);
    const pows = [1n];
    for (let i = 1; i < nums.length; i++) {
        pows[i] = pows[i-1] * 2n % mod;
    }
    let count = 0n,
        n = 0,
        max = nums.length - 1;
    for (let min = 0; min < nums.length; min++) {
        while (nums[min] + nums[max] > target) {
            max--;
        }
        if (max < min) {
            break;
        }
        n = max - min;
        count = (count + pows[n]) % mod;
    }
    return count;
};
