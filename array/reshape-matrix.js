// 2023-05-17
// https://leetcode.com/problems/reshape-the-matrix/submissions/952198917/?envType=study-plan&id=data-structure-i
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    if (mat.length * mat[0].length !== r * c) {
        return mat;
    }
    const result = [];
    let matR = 0, matC = 0;
    while (r > 0) {
        const row = [];
        for (let col = c; col > 0; col--) {
            // Advance to next row in mat when needed
            if (matC >= mat[0].length) {
                matC = 0;
                matR++;
            }
            row.push(mat[matR][matC]);
            matC++;
        }
        result.push(row);
        r--;
    }
    return result;
};
