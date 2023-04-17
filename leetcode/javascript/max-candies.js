// 2023-04-16
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/submissions/935025190/
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = 1;
    const result = [];
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > max) {
            max = candies[i];
        }
    }
    for (let i = 0; i < candies.length; i++) {
        result.push(candies[i] + extraCandies >= max);
    };
    return result;
};

/*
BCR: O(n)
Naive:
Iterate through, find max
Iterate again, if c[i] + extra > max then it's true
*/

