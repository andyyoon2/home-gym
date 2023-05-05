// 2023-05-05
// https://leetcode.com/problems/longest-common-prefix/submissions/945047243/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let curr = '', i = 0;
    while (i < strs[0].length) {
        curr = strs[0][i];
        for (let s of strs) {
            if (s[i] !== curr) {
                return strs[0].substring(0, i);
            }
        }
        i++;
    }
    return strs[0];
};
