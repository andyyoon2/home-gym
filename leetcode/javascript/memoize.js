// 2023-04-16
// https://leetcode.com/problems/memoize/submissions/935028751/
/**
 * @param {Function} fn
 */
function memoize(fn) {
    const cache = {};
    return function(...args) {
        if (cache[args.join(' ')] !== undefined) {
            return cache[args.join(' ')];
        } else {
            const result = fn(...args);
            cache[args.join(' ')] = result;
            return result;
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */

