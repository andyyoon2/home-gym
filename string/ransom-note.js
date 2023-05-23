// 2023-05-22
// https://leetcode.com/problems/ransom-note/submissions/955446226/?envType=study-plan&id=data-structure-i
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) {
        return false;
    }
    const map = new Map();
    // Construct map of available characters
    for (let c of magazine) {
        const count = map.get(c);
        if (count) {
            map.set(c, count + 1);
        } else {
            map.set(c, 1);
        }
    }
    // Check we have all the chars we need
    for (let c of ransomNote) {
        const count = map.get(c);
        if (count) {
            map.set(c, count - 1);
        } else {
            return false;
        }
    }
    return true;
};
