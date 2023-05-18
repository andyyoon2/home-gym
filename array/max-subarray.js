// 2023-05-18
// https://leetcode.com/problems/maximum-subarray/submissions/952904944/
// https://leetcode.com/problems/maximum-subarray/solutions/20193/dp-solution-some-thoughts/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums || nums.length === 0) {
        return 0;
    }
    let max = nums[0], sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        sum = Math.max(sum + nums[i], nums[i]);
        max = Math.max(max, sum);
    }
    return max;
};
