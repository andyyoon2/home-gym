// 2023-05-05
// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/submissions/945065278/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let max = 0, curr = 0, i = 0;
    // Get num vowels in 1st window
    while (i < k) {
        if (s[i] === 'a' ||
            s[i] === 'e' ||
            s[i] === 'i' ||
            s[i] === 'o' ||
            s[i] === 'u'
        ) {
            curr++;
        }
        i++;
    }
    max = curr;
    // Check remaining windows
    while (i < s.length) {
        if (s[i-k] === 'a' ||
            s[i-k] === 'e' ||
            s[i-k] === 'i' ||
            s[i-k] === 'o' ||
            s[i-k] === 'u'
        ) {
            curr--;
        }
        if (s[i] === 'a' ||
            s[i] === 'e' ||
            s[i] === 'i' ||
            s[i] === 'o' ||
            s[i] === 'u'
        ) {
            curr++;
        }
        if (curr > max) {
            max = curr;
        }
        i++;
    }
    return max;
};
