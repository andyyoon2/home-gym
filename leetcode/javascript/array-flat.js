// 2023-04-17
// https://leetcode.com/problems/flatten-deeply-nested-array/submissions/935437331/
/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    return flatHelper(arr, n, 0);
};

function flatHelper(arr, n, depth) {
    if (n === 0 || typeof arr === 'number') {
        return arr;
    }
    let result = [];
    for (let a of arr) {
        if (depth >= n || typeof a === 'number') {
            result.push(a);
        } else {
            result.push(...flatHelper(a, n, depth+1));
        }
    }
    return result;
}

