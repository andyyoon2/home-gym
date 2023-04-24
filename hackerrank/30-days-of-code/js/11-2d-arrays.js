// 2023-04-16
// https://www.hackerrank.com/challenges/30-2d-arrays/problem?isFullScreen=true
function hourglassSum(arr) {
    // Brute force
    let max = 0, hourglass = 0;
    for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
            hourglass = arr[r][c] + arr[r][c+1] + arr[r][c+2]
                + arr[r+1][c+1]
                + arr[r+2][c] + arr[r+2][c+1] + arr[r+2][c+2];
            if (hourglass > max || r === 0 && c === 0) {
                max = hourglass;
            }
            hourglass = 0;
        }
    }
    return max;
}

