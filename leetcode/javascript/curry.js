// 2023-04-17
// https://leetcode.com/problems/curry/submissions/935385673/
// https://leetcode.com/problems/curry/solutions/3415871/javascript-currying-2-solutions/
/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function(fn) {
    const savedArgs = [];
    return function curried(...args) {
        for (let i = 0; i < args.length; i++) {
            savedArgs.push(args[i]);
        }
        if (savedArgs.length === fn.length) {
            return fn(...savedArgs);
        } else {
            return curried;
        }
    };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */

