// 2023-04-14
// https://leetcode.com/problems/count-good-numbers/description/
// https://leetcode.com/problems/count-good-numbers/solutions/1314585/javascript-recursion-to-divide-in-half-to-calc-math-pow/
const mod = BigInt(Math.pow(10, 9) + 7);

/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function(n) {
    // Every even digit has 5 valid digits, every odd has 4 valid digits
    const evens = Math.floor(n / 2) + (n % 2);
    const odds = Math.floor(n / 2);
    // Result = 5^evens * 4^odds
    let result = BigInt(calcPower(5n, evens) * calcPower(4n, odds));
    return result % mod;
};

// Recursive, avoid overflow using mod
// b^x = b^(x/2) * b^(x/2)
function calcPower(base, exp) {
    if (exp === 0) {
        return 1n;
    } else if (exp === 1) {
        return base;
    }
    let result = 1n;
    result *= calcPower(base, Math.floor(exp/2));
    result *= result;
    if (exp % 2 === 1) {
        result *= base;
    }
    return result % mod;
}

