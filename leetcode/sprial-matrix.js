// 2023-05-09
// https://leetcode.com/problems/spiral-matrix/submissions/947336505/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let t = 0, l = 0, v = 1, b = matrix.length - 1, r = matrix[0].length - 1;
    const result = [];
    while (t <= b && l <= r) {
        // Horiz right
        result.push(...matrix[t].slice(l, r+1));
        // Vert down
        while (v < b) {
            result.push(matrix[v][r]);
            v++;
        }
        // Horiz left
        if (t < b) {
            result.push(...matrix[b].slice(l, r+1).reverse());
        }
        // Vert up
        if (l < r) {
            v--;
            while (v > t) {
                result.push(matrix[v][l]);
                v--;
            }
        }
        // Shrink sprial box
        t++;
        l++;
        b--;
        r--;
        v = t+1;
    }
    return result;
};

/*
1  2  3  4  5
6  7  8  9  10
11 12 13 14 15
16 17 18 19 20

horiz ->  = slice from l to r
vert down = array at r, to < b
horiz <-  = slice from l to r, then reverse
vert up   = array at l, to < t

t = 0, b = 3 = m-1 (rows), l = 0, r = 4 = n-1 (cols)
row0.slice(l,r+1)
row1[r]
row2[r]
row3.slice(l,r+1).reverse
row2[l]
row1[l]
t++ = 1
l++ = 1
b-- = 2
r-- = 3

row1.slice(1,3+1)
b is 2
row2.slice(1,3+1).reverse
l is 1
t++ = 2
l++ = 2
b-- = 1
r-- = 2

1 2 3
4 5 6
7 8 9
0 1 2
3 4 5
6 7 8
*/
