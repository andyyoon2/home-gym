// 2023-05-17
// https://leetcode.com/problems/pascals-triangle/submissions/952210667/?envType=study-plan&id=data-structure-i
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 1) {
        return [[1]];
    }
    const tri = [[1]];
    for (let r = 1; r < numRows; r++) {
        const row = [1];
        for (let i = 1; i < tri[tri.length-1].length; i++) {
            row.push(tri[r-1][i] + tri[r-1][i-1]);
        }
        row.push(1);
        tri.push(row);
    }
    return tri;
};
