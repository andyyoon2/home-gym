// 2023-05-03
// https://www.hackerrank.com/challenges/30-bitwise-and/problem
/*
 * Complete the 'bitwiseAnd' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER N
 *  2. INTEGER K
 */

function bitwiseAnd(N, K) {
    let max = 0, res = 0;
    for (let i = 0; i < N; i++) {
        for (let j = i+1; j <= N; j++) {
            res = i & j;
            if (res > max && res < K) {
                max = res;
            }
        }
    }
    return max;
}
