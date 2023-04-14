// 2023-04-14
// https://leetcode.com/problems/power-of-two/submissions/933717473/
function isPowerOfTwo(n: number): boolean {
    let powerResult = 1;
    while (n > powerResult) {
        powerResult *= 2;
    }
    return n === powerResult;
};

