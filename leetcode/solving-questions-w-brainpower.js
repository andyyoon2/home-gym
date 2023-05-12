// 2023-05-12
// https://leetcode.com/problems/solving-questions-with-brainpower/submissions/949127548/
/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    const memo = Array(questions.length);
    return maxPointsFrom(questions, 0, memo);
};

function maxPointsFrom(qs, i, memo) {
    if (i >= qs.length) {
        return 0;
    }
    if (i === qs.length - 1) {
        // Last question, only one option
        return qs[i][0];
    }
    if (memo[i] !== undefined) {
        return memo[i];
    }
    // Max of solving this question to skip the next few,
    // or skipping this one
    memo[i] = Math.max(
        qs[i][0] + maxPointsFrom(qs, i+1 + qs[i][1], memo),
        maxPointsFrom(qs, i+1, memo)
    );
    return memo[i];
}
