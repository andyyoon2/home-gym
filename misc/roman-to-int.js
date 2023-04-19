// 2023-04-14
// https://leetcode.com/problems/roman-to-integer/submissions/933868455/
const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let val = 0, subtract = 0;
    for (let i = 0; i < s.length; i++) {
        if (values[s[i]] < values[s[i+1]]) {
            subtract = values[s[i]];
        } else {
            val += values[s[i]] - subtract;
            subtract = 0;
        }
    }
    return val;
};

