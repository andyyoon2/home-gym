// 2023-04-14
// https://leetcode.com/problems/power-of-two/submissions/933719703/
function isPowerOfTwo(n: number): boolean {
    if (n === 1) {
        return true;
    } else if (n < 1 || n % 2 > 0) {
        return false;
    } else {
        return isPowerOfTwo(n / 2);
    }
};

