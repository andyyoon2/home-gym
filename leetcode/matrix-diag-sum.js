// 2023-05-08
// https://leetcode.com/problems/matrix-diagonal-sum/submissions/946703652/
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    const end = mat.length - 1;
    let sum = 0;
    for (let i = 0; i <= end/2; i++) {
        if (i === end/2) {
            // Reached the center of the matrix
            sum += mat[i][i];
        } else {
            // Sum each corner
            sum += mat[i][i] + mat[i][end-i] + mat[end-i][i] + mat[end-i][end-i];
        }
    }
    return sum;
};
