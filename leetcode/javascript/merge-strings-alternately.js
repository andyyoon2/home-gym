// 2023-04-18
// https://leetcode.com/problems/merge-strings-alternately/submissions/935956704/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i = 0, result = '';
    while (i < word1.length && i < word2.length) {
        result += word1[i] + word2[i];
        i++;
    }
    if (i < word1.length) {
        result += word1.substring(i);
    } else if (i < word2.length) {
        result += word2.substring(i);
    }
    return result;
};

