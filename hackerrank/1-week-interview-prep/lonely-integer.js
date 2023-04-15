// 2023-04-15
// https://www.hackerrank.com/challenges/one-week-preparation-kit-lonely-integer/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-two
/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    // Populate hashmap O(n)
    const seenValues = {};
    for (let x of a) {
        if (seenValues[x]) {
            seenValues[x] += 1;
        } else {
            seenValues[x] = 1;
        }
    }
    // Iterate hashmap and find the 1 value O(n)
    for (let key in seenValues) {
        if (seenValues[key] === 1) {
            return key;
        }
    }
    // Should never reach here
    return 0;
}

