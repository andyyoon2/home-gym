// 2023-05-22
// https://leetcode.com/problems/valid-anagram/submissions/955448869/?envType=study-plan&id=data-structure-i
// Very similar to Ransom Note, doing the sort method here for more varied practice
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const ss = s.split('').sort();
    const tt = t.split('').sort();
    for (let i = 0; i < ss.length; i++) {
        if (ss[i] !== tt[i]) {
            return false;
        }
    }
    return true;
};
