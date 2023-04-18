// 2023-04-18
// https://www.hackerrank.com/challenges/one-week-preparation-kit-grid-challenge/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-four
/*
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */
function gridChallenge(grid) {
    const temp = [];
    for (let i = 0; i < grid.length; i++) {
        temp[i] = Array.from(grid[i]).sort();
    }
    // Iterate through each column and compare with the previous row
    let c = 0;
    while (c < temp.length) {
        for (let r = 1; r < temp.length; r++) {
            if (temp[r-1][c] > temp[r][c]) {
                return 'NO';
            }
        }
        c++;
    }
    return 'YES';
}

/*
BCR: O(n*s) where n is num of strings, s is length of strings
= O(n^2) because n == s, square grid
Naive:
Sort each string -> O(n * s log s)
Check each column -> O(n * s)
-> O(ns log s) = O(n^2 log n) (Yikes!)

Optimize:
If a row has all chars > the max char of next row, we return false
If a row has all chars <= the min char of the next row, okay to continue
If not, need to process where the max would go and compare.. ?
-> Need to get which position each non-matching char would end up
-> Sort each string then compare

If we do this it is
Best case is O(n)
    Iterate 1st row O(n)
    Iterate 2nd row O(n)
Worst case: O(n*n log n)
    Iterate 1st row O(n)
    Iterate 2nd row O(n)
    Sort 1st row O(n log n)
    Sort 2nd row O(n log n)
    Compare strings O(n)
    Iterate 3rd row O(n)
    Sort 3rd row O(n log n)
    Compare O(n)
    O(n) to get max of each row * n iters -> O(n*n)
    O(n*n log n) sorts
    O(n) comparisons

We can do String.localeCompare for the col compares https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
*/

