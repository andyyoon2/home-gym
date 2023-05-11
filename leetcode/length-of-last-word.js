// 2023-05-11
// https://leetcode.com/problems/length-of-last-word/submissions/948548909/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const arr = s.trim().split(' ');
    return arr[arr.length - 1].length;
};
