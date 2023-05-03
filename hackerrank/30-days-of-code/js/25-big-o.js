// 2023-05-03
// https://www.hackerrank.com/challenges/30-running-time-and-complexity/problem
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.ceil(Math.sqrt(n)) && i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
