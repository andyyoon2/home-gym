// 2023-05-10
// https://leetcode.com/problems/spiral-matrix-ii/submissions/948119660/
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  if (n === 1) {
    return [[1]];
  }
  let x = n**2, seed;
  if (n % 2 === 1) {
    seed = [[x]];
  } else {
    seed = [
      [x - 3, x - 2],
      [x, x - 1],
    ];
    x -= 3;
  }
  while (x > 1) {
    x = addSpiralAndDecrement(seed);
  }
  return seed;
};

function addSpiralAndDecrement(seed) {
  let x = seed[0][0];
  // Prepend going down
  seed.forEach(row => {
    row.unshift(--x);
  });
  // Add new row at the bottom
  const bottomRow = [];
  for (let i = 0; i < seed.length + 2; i++) {
    bottomRow.push(--x);
  }
  seed.push(bottomRow);
  // Add new column on right, going up
  for (let c = seed.length - 2; c >= 0; c--) {
    seed[c].push(--x);
  }
  // Add new row at the top
  const topRow = [];
  for (let i = x - seed.length - 1; i < x; i++) {
    topRow.push(i);
  }
  seed.unshift(topRow);
  return x - topRow.length;
}

/*
1st row is n
rightmost col is n-1
bottom row is n-1
going up left col is n-2

1

1 2
4 3

1  2  3  4
12 13 14 5
11 16 15 6
10 9  8  7

1  2  3  4  5
16 17 18 19 6
15 24 25 20 7
14 23 22 21 8
13 12 11 10 9

1           5
16       19
   24 25
   23    21
13          9

1  2  3  4  5  6
20          24
   32    34
      36 35
   30       27
16             11

n^2 always in the center... maybe
  odd  = mat[n/2][n/2]
  even = mat[n/2][n/2 - 1]
top row always 1 to n
last row always n to 2n-1
bottom row 3n-2 to 2n-1
2nd row

1: rght, n iters, 0 + n = n
2: down, n-1 i's, n + n - 1 = 2n - 1
3: left, n-1 i's, 2n-1 + n-1 = 3n - 2
4: up  , n-2 i's, 3n-2 + n-2 = 4n - 4

normal increasing from top row, [0] to [n-1], starting from 1
2nd row, [0] to [n-2], starting from 4n-4

...

BCR: O(n^2)
Code way is to generate each row of the matrix using calcs
Human way is to go through the spiral order
1: 1st row easy, row [0], cols [0] to [n-1]
2: vertical, col [n-1], rows [1] to [n-1]
3: Bottom row is a reverse, row [n-1], col [n-2] to [0]
4: Vertical going up
5: horiz from row [1], cols [0] to [n-2]

recursion... generate smaller inner spirals?

start from the inside and go out?
*/
