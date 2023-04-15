// 2023-04-15
// https://www.hackerrank.com/challenges/one-week-preparation-kit-diagonal-difference/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-two&h_r=next-challenge&h_v=zen
/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    let i = 0, ltr = 0, rtl = 0;
    while (i < arr.length) {
        ltr += arr[i][i];
        rtl += arr[i][arr.length - i - 1];
        i++;
    }
    return Math.abs(ltr - rtl);
}

