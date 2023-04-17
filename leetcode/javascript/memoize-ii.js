// 2023-04-16
// https://leetcode.com/problems/memoize-ii/description/
// https://leetcode.com/problems/memoize-ii/solutions/3412240/js-typescript-easiest-solution-beats-100/
// https://leetcode.com/problems/memoize-ii/solutions/3408825/using-map-and-symbol/
/**
 * @param {Function} fn
 */
function memoize(fn) {
    // Cache is a Map of Maps (Hint 4/4)
    const cache = new Map();
    return function(...args) {
        // Check for cache hit
        let val = getCachedVal(cache, args);
        if (!Number.isNaN(val)) {
            return val;
        }
        // Cache miss, add argslist to cache
        const result = fn(...args);
        addToCache(cache, args, result, 0);
        return result;
    }
}

function getCachedVal(root, args) {
    let node = root;
    for (let i = 0; i < args.length; i++) {
        node = node.get(args[i]); // Map.get compares by `===`
        console.log(node, args[i]);
        if (!node) {
            return NaN;
        }
    }
    return node;
}

function addToCache(node, args, result, i) {
    if (i === args.length - 1) {
        node.set(args[i], result);
    } else {
        node.set(args[i], addToCache(new Map(), args, result, i+1));
    }
}

// {
//     2: {
//         2: 4,
//         3: 5
//     },
//     1: {
//         2: 3
//     }
// }


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

