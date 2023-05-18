// 2023-05-18
// https://leetcode.com/problems/first-unique-character-in-a-string/submissions/952869036/?envType=study-plan&id=data-structure-i
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = new Map(); // Map characters to their 1st index
    for (let i = 0; i < s.length; i++) {
        const index = map.get(s[i]);
        if (index === undefined) {
            map.set(s[i], i);
        } else if (index > -1) {
            map.set(s[i], -1); // Mark as dup only once
        }
    }
    for (let v of map.values()) {
        if (v > -1) {
            return v;
        }
    }
    return -1;
};
