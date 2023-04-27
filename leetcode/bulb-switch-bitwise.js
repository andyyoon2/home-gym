// 2023-04-27
// https://leetcode.com/problems/bulb-switcher/
/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    if (n <= 1) {
        return n;
    }
    // Generate binary number of n 1's
    // let bulbs = (2 ** n) - 1, mask;
    let bulbs = 1, mask;
    for (let i = 1; i < n; i++) {
        bulbs = (bulbs << 1) + 1;
    }
    // For each round i, generate bitmask and XOR
    for (let i = 2; i <= n; i++) {
        mask = 2 ** (i-1);
        for (let j = 0; j < Math.floor(n/i - 1); j++) {
            mask = (mask << i) + 2 ** (i-1);
        }
        bulbs ^= mask;
    }
    // Count number of 1's left
    let count = 0;
    while (bulbs > 0) {
        bulbs = bulbs & (bulbs-1);
        count++;
    }
    return count;
};

/*
0001 >> 1

1000 >> 1
0100

generate num
0001 << 1 = 0010
0010 + 1 = 0011

generate bitmask
0001
0001 << 2 = 0100
0100 + 1 = 0101
we have to do this until the mask covers n digits

n = 8
1111 1111
= 2^8 - 1

bitmask for i = 2
1010 1010

start with 2 = 2^1 = 2^(i-1)
0000 0010 now << 2 and + 2
0000 1010
0010 1010
1010 1010 3 iters

for i = 3
start with 2^2 = 4
0000 0100 now << 3 and + 4
0010 0100 done, 1 iter

for i = 4
start with 2^3 = 8
0000 1000 now << 4 and + 8
1000 1000 done, 1 iter

num iters = math.floor(n/i) - 1
left shift by i
starting value and add each time is 2^(i-1)
*/
