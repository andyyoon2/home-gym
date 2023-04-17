// 2023-04-17
// https://leetcode.com/problems/promise-pool/submissions/935419226/
// https://leetcode.com/problems/promise-pool/solutions/3411605/async-await-all-the-way/
// https://leetcode.com/problems/promise-pool/solutions/3407973/typescript-short-and-simple/
// https://leetcode.com/problems/promise-pool/solutions/3408332/iterator-and-workers/
/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
// var promisePool = async function(functions, n) {
//     const next = () => functions[n++]?.().then(next);
//     return Promise.all(functions.slice(0, n).map(fn => fn().then(next)));
// };

var promisePool = async function(functions, n) {
    const next = async () => {
        if (!functions.length) {
            return Promise.resolve();
        }
        await functions.shift()();
        await next();
    };
    return Promise.all(new Array(n).fill(0).map(next));
};


/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */

/*
function[i] is async
returns a Promise
f[i]().then(() => {
    clear me from the pool
    start next fn
});
*/

