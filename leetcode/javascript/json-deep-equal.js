// 2023-04-18
// https://leetcode.com/problems/json-deep-equal/submissions/935978233/
// https://leetcode.com/problems/json-deep-equal/solutions/3411176/all-cases-detailed-explanation/
/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function(o1, o2) {
    if (o1 === o2) {
        return true;
    }
    if (!o1 || !o2 || typeof o1 !== 'object' || typeof o2 !== 'object') {
        return false;
    }
    const a1 = Array.isArray(o1) ? 1 : 0;
    const a2 = Array.isArray(o2) ? 1 : 0;
    if (a1 ^ a2) {
        return false;
    }
    keys1 = Object.keys(o1);
    keys2 = Object.keys(o2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (!areDeeplyEqual(o1[key], o2[key])) {
            return false;
        }
    }
    return true;
};

